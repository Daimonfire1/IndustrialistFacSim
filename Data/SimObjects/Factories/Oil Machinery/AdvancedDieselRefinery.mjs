import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let CrudeDieselRefining = new AdvSimRecipe([["CrudeDiesel", 3],["MachineOil",0.15]], [["PoorQualityDiesel", 2.7],["Residue",0.3]], 1, "second", [1.2, "MMF", 1, "second"])
let PoorDieselRefining = new AdvSimRecipe([["PoorQualityDiesel", 3],["MachineOil",0.15]], [["Diesel", 2.7],["Residue",0.3]], 1, "second", [1.2, "MMF", 1, "second"])
let DieselRefining = new AdvSimRecipe([["Diesel", 3],["MachineOil",0.15]], [["RefinedDiesel", 2.7],["Residue",0.3]], 1, "second", [1.2, "MMF", 1, "second"])
let RefinedDieselRefining = new AdvSimRecipe([["RefinedDiesel", 3],["MachineOil",0.15]], [["Gasoline", 2.7],["Residue",0.3]], 1, "second", [1.2, "MMF", 1, "second"])
    
let AdvancedDieselRefinery = new AbstractMachine(10000, 14, 14, [1.5, "MMF"], [216, "PP/H"]) //POLLUTION NOT CONFIRMED
    
export let CrudeAdvancedDieselRefinerySim = new RecipeSimulator(AdvancedDieselRefinery, CrudeDieselRefining)
export let PoorAdvancedDieselRefinerySim = new RecipeSimulator(AdvancedDieselRefinery, PoorDieselRefining)
export let AdvancedDieselRefinerySim = new RecipeSimulator(AdvancedDieselRefinery, DieselRefining)
export let RefinedAdvancedDieselRefinerySim = new RecipeSimulator(AdvancedDieselRefinery, RefinedDieselRefining)