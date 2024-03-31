import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let AdvancedCoalDrillRecipe = new AdvSimRecipe([[]], [["Coal", 3]], 13.33, "second", [9, "kMF", 1, "second"])


let AdvancedCoalDrill = new AbstractMachine(1000, 8, 4, [60, "kMF"], [0, "PP/H"])


export let AdvancedCoalDrillSim = new RecipeSimulator(AdvancedCoalDrill, AdvancedCoalDrillRecipe)