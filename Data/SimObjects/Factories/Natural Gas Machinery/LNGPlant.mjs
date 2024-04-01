import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let LNGRecipe = new AdvSimRecipe([["RefinedGas", 120]], [["LNG", 3.6]], 1, "second", [1.9, "MMF", 1, "second"])
    
let LNGPlant = new AbstractMachine(500000, 14, 22, [2.5, "MMF"], [0, "PP/H"])
    
export let LNGPlantSim = new RecipeSimulator(LNGPlant, LNGRecipe)