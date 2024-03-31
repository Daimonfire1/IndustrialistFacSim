import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let GasBurnerRecipe = new AdvSimRecipe([["Water", 30],["RefinedGas", 30]], [["Water400c", 30]], 1, "second", [0, "MF", 1, "second"])


let GasBurner = new AbstractMachine(100000, 5, 4, [0, "MF"], [173, "PP/H"])


export let GasBurnerSim = new RecipeSimulator(GasBurner, GasBurnerRecipe)