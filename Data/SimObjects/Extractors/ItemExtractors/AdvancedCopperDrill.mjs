import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let AdvancedCopperDrillRecipe = new AdvSimRecipe([[]], [["RawCopper", 3]], 11.66, "second", [6, "kMF", 1, "second"])


let AdvancedCopperDrill = new AbstractMachine(520, 8, 4, [60, "kMF"], [0, "PP/H"])


export let AdvancedCopperDrillSim = new RecipeSimulator(AdvancedCopperDrill, AdvancedCopperDrillRecipe)