import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let CopperDrillRecipe = new AdvSimRecipe([[]], [["RawCopper", 1]], 9, "second", [360, "MF", 1, "second"])


let CopperDrill = new AbstractMachine(190, 6, 2, [1.5, "kMF"], [108, "PP/H"])


export let CopperDrillSim = new RecipeSimulator(CopperDrill, CopperDrillRecipe)