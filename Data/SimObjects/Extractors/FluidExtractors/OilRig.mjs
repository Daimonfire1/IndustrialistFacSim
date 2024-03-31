import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let OilRigRecipe = new AdvSimRecipe([[]], [["CrudeOil", 0.09]], 1, "second", [1.5, "kMF", 1, "second"])


let OilRig = new AbstractMachine(1200, 8, 2, [15, "kMF"], [21.6, "PP/H"])


export let OilRigSim = new RecipeSimulator(OilRig, OilRigRecipe)