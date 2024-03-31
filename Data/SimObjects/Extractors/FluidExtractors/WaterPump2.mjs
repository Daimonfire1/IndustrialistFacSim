import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let WaterPump2Recipe = new AdvSimRecipe([[]], [["Water", 30]], 5.2, "second", [770, "MF", 1, "second"])


let WaterPump2 = new AbstractMachine(6000, 4, 4, [50, "kMF"], [0, "PP/H"])


export let WaterPump2Sim = new RecipeSimulator(WaterPump2, WaterPump2Recipe)