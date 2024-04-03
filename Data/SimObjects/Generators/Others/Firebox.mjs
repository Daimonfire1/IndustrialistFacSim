import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let FireboxRecipe = new AdvSimRecipe([["Water", 6],["Coal", 1]], [["Water240c", 6]], 1, "second", [0, "MF", 1, "second"])


let Firebox = new AbstractMachine("Firebox", 550, 4, 6, [0, "MF"], [1080, "PP/H"])


export let FireboxSim = new RecipeSimulator(Firebox, FireboxRecipe)