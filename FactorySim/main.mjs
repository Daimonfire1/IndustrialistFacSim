//@module

import { createInterface } from 'readline/promises';



const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

var cyclemessage = "What would you like to do? \n 1:Simulation upwards from inputs\n 2:Simulation downwards from outputs\n 3:Power Generation Sim(not available yet)\n 4:Die(not available yet)\n\n type \"exit\" at any point to quit the program\n (not available yet, just crash it somehow)"

console.clear()

console.log("IndustrialistFacSim Pre-Alpha v0.01")
console.log("I provide no guarantee this works, it's currently a WIP and not documented either.")
console.log("I am working on a release, but rn this is all just made to work for me internally")

console.log("INFO: We are booting bois!")
console.log("Fetching all definitions")

import * as BatchedSimData from "../Bundler.mjs";
import { RecipeSimulator } from '../Data/BaseDefinitions/AbstractDefs/RecipeSimulator.mjs';
import { GeneralSimRunner } from './SimSimSims/GeneralSim.mjs';

console.log("Unpacking Data...")

const DataArray = [] //[new String(), new RecipeSimulator()]]
 
for (const ArraySimPair of Object.entries(BatchedSimData)) {
    if(ArraySimPair[1] instanceof RecipeSimulator){
    	DataArray.push([ArraySimPair[0],ArraySimPair[1]])
    }
}

console.log("Unpacked and restructured "+DataArray.length+" batches of Data")
var chosesim = false

//DataArray.find
//while(true){
    //console.clear()

    const answer = await rl.question(cyclemessage+"\n");
    switch (answer) {
        case "1":
    	case "2":
            const bongus = await rl.question("Should the sim be based off of an 1:ITEM or a 2:MACHINE")
            await GeneralSimRunner(DataArray, rl, [answer, bongus])
            break;
        case "3":
            console.log("This ain't supported yet, learn to read! . <.")
            break;
        case "4":
            console.log("Ok, you wanted this")
            throw new Error("YEEET")
            break;
        default:
            console.log("Switch case had to default, congrats. This script will now terminate")
            break;
    }
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
    
    //const ScrubberBubber = DataArray.filter((el) =>el[0].toString().toLowerCase().includes("Scrubber".toLowerCase()))

    //const resolveproduction = ScrubberBubber.filter((el) =>el[1].hasItemImport("FilteredWater"))

    //const stepup = DataArray.filter((el) => el[1].hasItemExport("FilteredWater"))

    //resolveproduction[0][1].getRecipeDef().getPowerDef()
    
    //await GeneralSimRunner(DataArray, rl)

//}

rl.close();
console.error("ADIOS, have fun with random error lmao")