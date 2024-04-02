import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let GasRefining = new AdvSimRecipe([["WaterFreeGas", 90]], [["RefinedGas", 60],["Residue", 3]], 1, "second", [60, "kMF", 1, "second"])
    
let GasRefinery = new AbstractMachine("Gas Refinery", 350000, 14, 12, [1, "MMF"], [216, "PP/H"])
    
export let GasRefinerySim = new RecipeSimulator(GasRefinery, GasRefining)