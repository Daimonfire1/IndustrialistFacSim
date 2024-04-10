import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let LargeDieselGenRecipeCrude = new AdvSimRecipe([["CrudeDiesel", 20],["MachineOil", 1]], [], 10, "second", [-5, "MMF", 1, "second"])

let LargeDieselGenRecipePoor = new AdvSimRecipe([["PoorQualityDiesel", 15],["MachineOil", 1]], [], 10, "second", [-5, "MMF", 1, "second"])

let LargeDieselGenRecipeNormal = new AdvSimRecipe([["Diesel", 10],["MachineOil", 1]], [], 10, "second", [-5, "MMF", 1, "second"])

let LargeDieselGenRecipeRefined = new AdvSimRecipe([["RefinedDiesel", 7],["MachineOil", 1]], [], 10, "second", [-5, "MMF", 1, "second"])


let LargeDieselGenRecipeCrudeWaterBoost = new AdvSimRecipe([["CrudeDiesel", 20],["MachineOil", 1],["Water", 20]], [], 10, "second", [-6, "MMF", 1, "second"])

let LargeDieselGenRecipePoorWaterBoost = new AdvSimRecipe([["PoorQualityDiesel", 15],["MachineOil", 1],["Water", 20]], [], 10, "second", [-6, "MMF", 1, "second"])

let LargeDieselGenRecipeNormalWaterBoost = new AdvSimRecipe([["Diesel", 10],["MachineOil", 1],["Water", 20]], [], 10, "second", [-6, "MMF", 1, "second"])

let LargeDieselGenRecipeRefinedWaterBoost = new AdvSimRecipe([["RefinedDiesel", 7],["MachineOil", 1],["Water", 20]], [], 10, "second", [-6, "MMF", 1, "second"])


let LargeDieselGenRecipeCrudeFilteredWaterBoost = new AdvSimRecipe([["CrudeDiesel", 20],["MachineOil", 1],["FilteredWater", 7.5]], [], 10, "second", [-6, "MMF", 1, "second"])

let LargeDieselGenRecipePoorFilteredWaterBoost = new AdvSimRecipe([["PoorQualityDiesel", 15],["MachineOil", 1],["FilteredWater", 7.5]], [], 10, "second", [-6, "MMF", 1, "second"])

let LargeDieselGenRecipeNormalFilteredWaterBoost = new AdvSimRecipe([["Diesel", 10],["MachineOil", 1],["FilteredWater", 7.5]], [], 10, "second", [-6, "MMF", 1, "second"])

let LargeDieselGenRecipeRefinedFilteredWaterBoost = new AdvSimRecipe([["RefinedDiesel", 7],["MachineOil", 1],["FilteredWater", 7.5]], [], 10, "second", [-6, "MMF", 1, "second"])

let LargeDieselGen = new AbstractMachine("Large Diesel Generator", 1000000, 14, 8, [75, "MMF"], [2648, "PP/H"])   //POLLUTION NOT CONFIRMED

export let LargeDieselGenSimCrude = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipeCrude)
export let LargeDieselGenSimPoor = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipePoor)
export let LargeDieselGenSimNormal = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipeNormal)
export let LargeDieselGenSimRefined = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipeRefined)

export let LargeDieselGenSimCrudeWaterBoost = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipeCrudeWaterBoost)
export let LargeDieselGenSimPoorWaterBoost = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipePoorWaterBoost)
export let LargeDieselGenSimNormalWaterBoost = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipeNormalWaterBoost)
export let LargeDieselGenSimRefinedWaterBoost = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipeRefinedWaterBoost)

export let LargeDieselGenSimCrudeFilteredWaterBoost = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipeCrudeFilteredWaterBoost)
export let LargeDieselGenSimPoorFilteredWaterBoost = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipePoorFilteredWaterBoost)
export let LargeDieselGenSimNormalFilteredWaterBoost = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipeNormalFilteredWaterBoost)
export let LargeDieselGenSimRefinedFilteredWaterBoost = new RecipeSimulator(LargeDieselGen, LargeDieselGenRecipeRefinedFilteredWaterBoost)