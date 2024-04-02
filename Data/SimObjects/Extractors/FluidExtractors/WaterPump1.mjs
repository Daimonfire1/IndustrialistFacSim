import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let WaterPump1Recipe = new AdvSimRecipe([[]], [["Water", 1.35]], 1, "second", [600, "MF", 1, "second"])


let WaterPump1 = new AbstractMachine("Water Pump 1", 90, 4, 4, [15, "kMF"], [0, "PP/H"])


export let WaterPump1Sim = new RecipeSimulator(WaterPump1, WaterPump1Recipe)