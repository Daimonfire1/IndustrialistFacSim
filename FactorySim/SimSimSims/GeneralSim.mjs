

export async function GeneralSimRunner(DataImport, LineReader) {

    console.clear()
    console.log("Reroute to G-Sim module complete, Aloha o/")
    console.log("Which machine should be the focus of this simulation?")
    console.log("Simply search for a name")

    const answer = await LineReader.question("Simply search for a name")

    DataImport.find
    
}

function DArrayMachineNameSearch(DArray, SearchTerm){
    return DArray.filter((el) =>el[1].getMachineDef().getName().toLowerCase().includes(SearchTerm.toLowerCase()))
}

function DArrayItemImportSearch(DArray, SearchItem){
    return DArray.filter((el) =>el[1].hasItemExport(SearchItem))
}

function DArrayItemExportSearch(DArray, SearchItem){
    return DArray.filter((el) =>el[1].hasItemExport(SearchItem))
}

async function InterrogateOptions(OptionsArray, LineReader){
    console.clear()
	OptionsArray.forEach((el, ind) => {
        console.log(ind.toString()+": "+el[0].toString()+" in machine "+el[1].getMachineDef().getName())
    });
    
    const answer = await LineReader.question("Choose a recipe via the number")

    return OptionsArray[answer]
}

function recursiveParse(SimArray, RecursionDepth){
    if(RecursionDepth==undefined){
        RecursionDepth = 1
    }
    
}