import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let CoalDrillRecipe = new AdvSimRecipe([[]], [["Coal", 1]], 4, "second", [120, "MF", 1, "second"])


let CoalDrill = new AbstractMachine("Coal Drill",50, 6, 2, [600, "MF"], [432, "PP/H"])


export let CoalDrillSim = new RecipeSimulator(CoalDrill, CoalDrillRecipe)