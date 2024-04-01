import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let OilBoilerRecipe = new AdvSimRecipe([["CrudeOil", 0.6]], [["HotCrudeOil", 0.6]], 1, "second", [10, "kMF", 1, "second"])
let WaterBoilerRecipe = new AdvSimRecipe([["Water", 0.6]], [["Water100c", 0.6]], 1, "second", [10, "kMF", 1, "second"])


let LiquidBoiler = new AbstractMachine(900, 4, 6, [30, "kMF"], [184, "PP/H"])


export let OilBoilerSim = new RecipeSimulator(LiquidBoiler, OilBoilerRecipe)
export let WaterBoilerSim = new RecipeSimulator(LiquidBoiler, WaterBoilerRecipe)