import { deepCopy } from "../../Data/Util/UtilFunctions.mjs"
import { RecipeSimulator } from "../../Data/BaseDefinitions/AbstractDefs/RecipeSimulator.mjs"
import fs from "node:fs"


export async function GeneralSimRunner(DataImport, LineReader, SimTypeData) {

    //console.clear()
    var seldir = "Normal"
    if(SimTypeData[0]=="1"){seldir = "Reverse"}

    console.log("Reroute to G-Sim module complete, Aloha o/")
    console.log("Which machine should be the focus of this simulation?")
    console.log("Simply search for a name")


    
    const answer = await LineReader.question("Simply search for a name")
	var go = DArrayMachineNameSearch(DataImport, answer)
    console.log(go)
    go = await InterrogateOptions(go, LineReader)
    const testarr = await recursiveSelection(DataImport, go, LineReader, seldir)
    console.log("If you see this, something went wrong")
    recursivePrint(testarr)
    
	const content = JSON.stringify(testarr, null, '\n')
    
	fs.writeFile('../IFSOut.json', content, err => {
  		if (err) {
 		   console.error(err);
 		} else {
    		// file written successfully
  		}
	})
}

function DArrayMachineNameSearch(DArray, SearchTerm){
    return DArray.filter((el) =>el[1].getMachineDef().getName().toLowerCase().includes(SearchTerm.toLowerCase()))
}

function DArrayItemImportSearch(DArray, SearchItem){
    return DArray.filter((el) =>el[1].hasItemImport(SearchItem))
}

function DArrayItemExportSearch(DArray, SearchItem){
    return DArray.filter((el) =>el[1].hasItemExport(SearchItem))
}

function DArrayItemSearchDirectional(DArray, SearchItem, Direction){
    if(Direction == "Reverse"){
        return DArrayItemImportSearch(DArray, SearchItem)
    }else{
        return DArrayItemExportSearch(DArray, SearchItem)
    }
}

async function InterrogateOptions(OptionsArray, LineReader){
    //console.clear()
	OptionsArray.forEach((el, ind) => {
        console.log(ind.toString()+": "+el[0].toString()+" in machine "+el[1].getMachineDef().getName())
    });
    
    const answer = await LineReader.question("Choose a recipe via the number, or X to cancel")

    if(answer == "x"){
        return undefined
    }
    return OptionsArray[answer]
}

async function productionLine(DArray, ItemStep, LineReader, SearchDirection){
    if(ItemStep == undefined){
        return false
    }
    const options = DArrayItemSearchDirectional(DArray, ItemStep, SearchDirection)

    if(options.length == 0){
        return false
    }
    return await InterrogateOptions(options, LineReader)
}

async function recursiveSelection(DArray, MachineSearchRe, LineReader, SearchDirection){
    var direopt = undefined
    console.log(MachineSearchRe)
    
	var MachineSearch = undefined
    if(MachineSearchRe[0][1] instanceof RecipeSimulator){
        MachineSearch = MachineSearchRe[0][1].getRecipeDef()
    }else{
        MachineSearch = MachineSearchRe[1].getRecipeDef()
    }
    if(SearchDirection == "Reverse"){
        direopt = MachineSearch.getOutputItems()
        direopt = deepCopy(direopt)
    }else{
        direopt = MachineSearch.getInputItems()
        direopt = deepCopy(direopt)
    }
    console.log(direopt[0].getItemDef())
    var upwardsPassingArray =[]
    for (let i = 0; i < direopt.length; i++) {
        console.log(i)
        let FurtherMachine = await productionLine(DArray, direopt[i].getItemDef(), LineReader, SearchDirection)
        console.log(FurtherMachine)
        if(!FurtherMachine){
            continue
        }
		var FurtherMachineRec = FurtherMachine[1].getRecipeDef()
        const NeededFlow = direopt[i].getItemFlow(1, "second")
        var GivenFlow = undefined
        console.log(FurtherMachineRec)
        if(SearchDirection == "Reverse"){
            GivenFlow = FurtherMachineRec.getInputItems(direopt[i].getItemDef()).getItemFlow(1, "second") / FurtherMachine[1].getScale()
        }else{
            GivenFlow = FurtherMachineRec.getOutputItems(direopt[i].getItemDef()).getItemFlow(1, "second") / FurtherMachine[1].getScale()
        }
        let Scale = NeededFlow / GivenFlow

        FurtherMachine[1].setScale(Scale)

        let recursiveData = await recursiveSelection(DArray, FurtherMachine, LineReader, SearchDirection)
		
        upwardsPassingArray.push(recursiveData)
    }
    return [MachineSearch, upwardsPassingArray]
}

function recursiveParse(SimArray, RecursionDepth){
    if(RecursionDepth==undefined){
        RecursionDepth = 1
    }
    
}

function recursivePrint(DataArray, DepthPass){
    if(DepthPass == undefined){
        DepthPass = 0
    }
    DataArray.forEach(el => {
        if(el instanceof Array){
            recursivePrint(el, DepthPass++)
        }else{
            console.log(DepthPass.toString() + ": ")
            console.log(el)
        }
    });
}