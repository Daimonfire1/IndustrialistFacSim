import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let EthanolRefining = new AdvSimRecipe([["CrudeOil", 2.2],["Water",8]], [["Ethanol", 2]], 4, "second", [60, "kMF", 1, "second"])
let PTARefining = new AdvSimRecipe([["Paraxylene", 1],["AceticAcid",4]], [["PTA", 2]], 4, "second", [60, "kMF", 1, "second"])
    
let PlasticRefinery = new AbstractMachine(100000, 10, 15, [2.5, "MMF"], [999, "PP/H"]) //NOT CONFIRMED
    
export let PlasticRefinerySim = new RecipeSimulator(PlasticRefinery, EthanolRefining)