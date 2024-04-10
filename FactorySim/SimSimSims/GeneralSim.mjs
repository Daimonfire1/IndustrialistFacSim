

export async function GeneralSimRunner(DataImport, LineReader) {

    console.clear()
    console.log("Reroute to G-Sim module complete, Aloha o/")
    console.log("Which machine should be the focus of this simulation?")
    console.log("Simply search for a name")

    const answer = await LineReader.question("Simply search for a name")

    const testarr = await recursiveSelection(DataImport, answer, LineReader, "Normal")
    console.log(testarr)
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
    console.clear()
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
    const options = DArrayItemSearchDirectional(DArray, ItemStep, SearchDirection)
    if(!options){
        return false
    }
    return await InterrogateOptions(options, LineReader)
}

async function recursiveSelection(DArray, MachineSearch, LineReader, SearchDirection){
    let direopt = undefined
    if(SearchDirection == "Reverse"){
        direopt = MachineSearch.getOutputItems()
    }else{
        direopt = MachineSearch.getInputItems()
    }
    var upwardsPassingArray =[]
    for (let i = 0; i < direopt.length; i++) {
        let FurtherMachine = await productionLine(DArray, direopt[i].getItemDef(), LineReader, SearchDirection)
        
        if(!FurtherMachine){
            continue
        }

        const NeededFlow = direopt[i].getItemFlow(1, "second")
        const GivenFlow = undefined
        if(SearchDirection == "Reverse"){
            GivenFlow = FurtherMachine.getInputItems(direopt[i].getItemDef()).getItemFlow(1, "second")
        }else{
            GivenFlow = FurtherMachine.getOutputItems(direopt[i].getItemDef()).getItemFlow(1, "second")
        }
        let Scale = NeededFlow / GivenFlow

        FurtherMachine.setScale(Scale)

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