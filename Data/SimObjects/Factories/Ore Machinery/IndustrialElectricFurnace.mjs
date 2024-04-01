import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let Gold8kSmelt = new AdvSimRecipe([["Gold8", 1]], [["LiquidGold", 0.08]], 5, "second", [200, "kMF", 1, "second"])

let Gold10kSmelt = new AdvSimRecipe([["Gold10", 1]], [["LiquidGold", 0.1]], 5, "second", [200, "kMF", 1, "second"])

let Gold12kSmelt = new AdvSimRecipe([["Gold12", 1]], [["LiquidGold", 0.2]], 5, "second", [200, "kMF", 1, "second"])

let Gold18kSmelt = new AdvSimRecipe([["Gold18", 1]], [["LiquidGold", 0.4]], 5, "second", [200, "kMF", 1, "second"])

let Gold24kSmelt = new AdvSimRecipe([["Gold24", 1]], [["LiquidGold", 1]], 5, "second", [200, "kMF", 1, "second"])

let AluminaSmelt = new AdvSimRecipe([["AluminaDust", 1]], [["LiquidAluminium", 1]], 5, "second", [200, "kMF", 1, "second"])

let SandSmelt = new AdvSimRecipe([["Sand", 2]], [["LiquidGlass", 1]], 5, "second", [200, "kMF", 1, "second"])


let IndustrialElectricFurnace = new AbstractMachine(1000000, 6, 6, [1.1, "MMF"], [158, "PP/H"])


export let IndustrialElectricFurnaceGold8kSmelt = new RecipeSimulator(IndustrialElectricFurnace, Gold8kSmelt)
export let IndustrialElectricFurnaceGold10kSmelt = new RecipeSimulator(IndustrialElectricFurnace, Gold10kSmelt)
export let IndustrialElectricFurnaceGold12kSmelt = new RecipeSimulator(IndustrialElectricFurnace, Gold12kSmelt)
export let IndustrialElectricFurnaceGold18kSmelt = new RecipeSimulator(IndustrialElectricFurnace, Gold18kSmelt)
export let IndustrialElectricFurnaceGold24kSmelt = new RecipeSimulator(IndustrialElectricFurnace, Gold24kSmelt)
export let IndustrialElectricFurnaceAluminaSmelt = new RecipeSimulator(IndustrialElectricFurnace, AluminaSmelt)
export let IndustrialElectricFurnaceSandSmelt = new RecipeSimulator(IndustrialElectricFurnace, SandSmelt)