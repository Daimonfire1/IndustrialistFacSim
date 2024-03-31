import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let GasWellRecipe = new AdvSimRecipe([[]], [["RawGas", 30]], 1, "second", [45, "kMF", 1, "second"])


let GasWell = new AbstractMachine(120000, 12, 12, [3, "MMF"], [432, "PP/H"])


export let GasWellSim = new RecipeSimulator(GasWell, GasWellRecipe)