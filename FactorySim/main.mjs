//@module

import { createInterface } from 'readline/promises';



const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

var cyclemessage = "What would you like to do? \n 1:Generator Sim\n 2:Factory Sim\n 3:General Sim(currently only supported, hi mom)\n 4:Die\n\n type \"exit\" at any point to quit the program"

console.clear()

console.log("INFO: We are booting bois!")
console.log("Fetching all definitions")

import * as BatchedSimData from "../Bundler.mjs";
import { RecipeSimulator } from '../Data/BaseDefinitions/AbstractDefs/RecipeSimulator.mjs';

console.log("Unpacking Data...")

const DataArray = [[instanceof String, RecipeSimulator]]
Da
for (const ArraySimPair of Object.entries(BatchedSimData)) {
    if(ArraySimPair[0] instanceof String & ArraySimPair[1] instanceof RecipeSimulator){
    	DataArray.push([ArraySimPair[0],ArraySimPair[1]])
    }
}

console.log("Unpacked and restructured "+DataArray.length+" batches of Data")
var chosesim = false

DataArray.find
//while(true){
    //console.clear()

    const answer = await rl.question(cyclemessage+"\n");
    if(answer == "exit"){
        //break;
    }
    if(!chosesim){
        var simnum = answer
        chosesim = true
    }
    if(simnum=="3"){
        console.log("UwU")
    }
    
    const ScrubberBubber = DataArray.filter((el) =>el[0].toString().toLowerCase().includes("Scrubber".toLowerCase()))

    const resolveproduction = ScrubberBubber.filter((el) =>el[1].hasItemImport("FilteredWater"))

    const stepup = DataArray.filter((el) => el[1].hasItemExport("FilteredWater"))

    resolveproduction[0][1].getRecipeDef().getPowerDef()
    
    DataArray[0][1].

//}

rl.close();
console.error("ADIOS, have fun with random error lmao")