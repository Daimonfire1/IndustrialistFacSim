import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let RawCopperRecipe = new AdvSimRecipe([["RawCopper", 1]], [["LiquidCopper", 1]], 3, "second", [400, "MF", 1, "second"])

let RawIronRecipe = new AdvSimRecipe([["RawIron", 1]], [["LiquidIron", 1]], 5, "second", [240, "MF", 1, "second"])

let CopperIngotSmelt = new AdvSimRecipe([["CopperIngot", 1]], [["LiquidCopper", 1.8]], 6, "second", [200, "MF", 1, "second"])

let IronIngotSmelt = new AdvSimRecipe([["IronIngot", 1]], [["LiquidIron", 1.8]], 10, "second", [120, "MF", 1, "second"])

let CopperMixRecipe = new AdvSimRecipe([["CopperMix", 2.67]], [["LiquidCopper", 5.2]], 3, "second", [400, "MF", 1, "second"])

let IronMixRecipe = new AdvSimRecipe([["IronMix", 3.2]], [["LiquidIron", 7]], 5, "second", [240, "MF", 1, "second"])


let ElectricFurnace = new AbstractMachine("Electric Furnace", 190, 6, 6, [15, "kMF"], [158, "PP/H"])


export let ElectricFurnaceRawCopperSim = new RecipeSimulator(ElectricFurnace, RawCopperRecipe)
export let ElectricFurnaceRawIronSim = new RecipeSimulator(ElectricFurnace, RawIronRecipe)
export let ElectricFurnaceCopperIngotSim = new RecipeSimulator(ElectricFurnace, CopperIngotSmelt)
export let ElectricFurnaceIronIngotSim = new RecipeSimulator(ElectricFurnace, IronIngotSmelt)
export let ElectricFurnaceCopperMixSim = new RecipeSimulator(ElectricFurnace, CopperMixRecipe)
export let ElectricFurnaceIronMixSim = new RecipeSimulator(ElectricFurnace, IronMixRecipe)