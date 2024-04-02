import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let IronDrillRecipe = new AdvSimRecipe([[]], [["RawIron", 1]], 15, "second", [1.2, "kMF", 1, "second"])


let IronDrill = new AbstractMachine("Iron Drill",350, 6, 2, [50, "kMF"], [432, "PP/H"])


export let IronDrillSim = new RecipeSimulator(IronDrill, IronDrillRecipe)