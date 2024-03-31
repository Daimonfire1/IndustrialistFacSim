//lmao
import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let UraniumDrillRecipe = new AdvSimRecipe([[]], [["Uranium", 1]], 30, "minute", [1.2, "GMF", 1, "second"])


let UraniumDrill = new AbstractMachine(3500000, 6, 2, [1, "GMF"], [2160, "PP/H"])


export let UraniumDrillSim = new RecipeSimulator(UraniumDrill, UraniumDrillRecipe)