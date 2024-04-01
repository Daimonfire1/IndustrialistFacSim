import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let FilteredWaterBottling = new AdvSimRecipe([["FilteredWater", 8],["Bottle",1]], [["WaterBottle", 1]], 3.5, "second", [2860, "MF", 1, "second"])
let WaterBottling = new AdvSimRecipe([["Water", 8],["Bottle",1]], [["CheapWaterBottle", 1]], 3.5, "second", [2860, "MF", 1, "second"])
let ResidueBottling = new AdvSimRecipe([["Residue", 8],["Bottle",1]], [["ResidueBottle", 1]], 3.5, "second", [2860, "MF", 1, "second"])
let RefinedDieselBottling = new AdvSimRecipe([["RefinedDiesel", 8],["Bottle",1]], [["RefinedDieselBottle", 1]], 3.5, "second", [2860, "MF", 1, "second"])
let CrudeOilBottling = new AdvSimRecipe([["CrudeOil", 8],["Bottle",1]], [["OilBottle", 1]], 3.5, "second", [2860, "MF", 1, "second"])
    
let BottlingPlant = new AbstractMachine(100000, 6, 8, [1, "MMF"], [0, "PP/H"])
    
export let FilteredWaterBottlingPlantSim = new RecipeSimulator(BottlingPlant, FilteredWaterBottling)
export let WaterBottlingPlantSim = new RecipeSimulator(BottlingPlant, WaterBottling)
export let ResidueBottlingPlantSim = new RecipeSimulator(BottlingPlant, ResidueBottling)
export let RefinedDieselBottlingPlantSim = new RecipeSimulator(BottlingPlant, RefinedDieselBottling)
export let CrudeOilBottlingPlantSim = new RecipeSimulator(BottlingPlant, CrudeOilBottling)