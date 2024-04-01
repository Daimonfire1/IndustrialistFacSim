import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let CrudeDieselRefining = new AdvSimRecipe([["CrudeDiesel", 0.1]], [["PoorQualityDiesel", 0.09],["Residue",0.01]], 0.67, "second", [1.5, "kMF", 1, "second"])
let PoorDieselRefining = new AdvSimRecipe([["PoorQualityDiesel", 0.1]], [["Diesel", 0.09],["Residue",0.01]], 0.83, "second", [1.2, "kMF", 1, "second"])
let DieselRefining = new AdvSimRecipe([["Diesel", 0.1]], [["RefinedDiesel", 0.09],["Residue",0.01]], 1, "second", [1, "kMF", 1, "second"])
let RefinedDieselRefining = new AdvSimRecipe([["RefinedDiesel", 0.1]], [["Gasoline", 0.09],["Residue",0.01]], 1, "second", [1, "kMF", 1, "second"])
    
let DieselRefinery = new AbstractMachine(1000, 10, 12, [50, "kMF"], [216, "PP/H"])
    
export let CrudeDieselRefinerySim = new RecipeSimulator(DieselRefinery, CrudeDieselRefining)
export let PoorDieselRefinerySim = new RecipeSimulator(DieselRefinery, PoorDieselRefining)
export let DieselRefinerySim = new RecipeSimulator(DieselRefinery, DieselRefining)
export let RefinedDieselRefinerySim = new RecipeSimulator(DieselRefinery, RefinedDieselRefining)