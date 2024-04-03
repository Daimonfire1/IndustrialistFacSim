import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let CrudeDieselRefining = new AdvSimRecipe([["CrudeDiesel", 2],["MachineOil",0.2]], [["PoorQualityDiesel", 1.8],["Residue",0.2]], 1, "second", [750, "kMF", 1, "second"])
let PoorDieselRefining = new AdvSimRecipe([["PoorQualityDiesel", 2],["MachineOil",0.2]], [["Diesel", 1.8],["Residue",0.2]], 1, "second", [750, "kMF", 1, "second"])
let DieselRefining = new AdvSimRecipe([["Diesel", 2],["MachineOil",0.2]], [["RefinedDiesel", 1.8],["Residue",0.2]], 1, "second", [750, "kMF", 1, "second"])
let RefinedDieselRefining = new AdvSimRecipe([["RefinedDiesel", 2],["MachineOil",0.2]], [["Gasoline", 1.8],["Residue",0.2]], 1, "second", [750, "kMF", 1, "second"])
    
let IndustrialDieselRefinery = new AbstractMachine("Industrial Diesel Refinery", 150000, 10, 16, [1.5, "MMF"], [216, "PP/H"]) //POLLUTION NOT CONFIRMED
    
export let CrudeIndustrialDieselRefinerySim = new RecipeSimulator(IndustrialDieselRefinery, CrudeDieselRefining)
export let PoorIndustrialDieselRefinerySim = new RecipeSimulator(IndustrialDieselRefinery, PoorDieselRefining)
export let IndustrialDieselRefinerySim = new RecipeSimulator(IndustrialDieselRefinery, DieselRefining)
export let RefinedIndustrialDieselRefinerySim = new RecipeSimulator(IndustrialDieselRefinery, RefinedDieselRefining)