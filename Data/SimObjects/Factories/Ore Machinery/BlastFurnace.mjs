import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let CoalIronIngotSmelting = new AdvSimRecipe([["Coal", 4],["IronIngot",1]], [["SteelIngot", 2]], 5, "second", [15, "kMF", 1, "second"])
let CoalIronMixSmelting = new AdvSimRecipe([["Coal", 5],["IronMix",3.2]], [["SteelIngot", 6]], 5, "second", [15, "kMF", 1, "second"])
let CoalIronPowderSmelting = new AdvSimRecipe([["Coal", 1.66],["IronPowder",1.6]], [["IronMix", 3.2]], 5, "second", [15, "kMF", 1, "second"])
let CoalCopperPowderSmelting = new AdvSimRecipe([["Coal", 3.32],["CopperPowder",2.66]], [["CopperMix", 5.32]], 5, "second", [15, "kMF", 1, "second"])
let CokeFuelSmelting = new AdvSimRecipe([["Coal", 4],["OakLog",2]], [["CokeFuel", 6]], 5, "second", [15, "kMF", 1, "second"])
let CokeBauxiteSmelting = new AdvSimRecipe([["CokeFuel", 4],["BauxiteCrushed",4]], [["Alumina", 6]], 5, "second", [15, "kMF", 1, "second"])
let CokeIronIngotSmelting = new AdvSimRecipe([["CokeFuel", 1],["IronIngot",2]], [["SteelIngot", 6]], 5, "second", [15, "kMF", 1, "second"])
let CokeIronMixSmelting = new AdvSimRecipe([["CokeFuel", 1.5],["IronMix",4]], [["SteelIngot", 12]], 5, "second", [15, "kMF", 1, "second"])
let CokeIronPowderSmelting = new AdvSimRecipe([["CokeFuel", 1],["IronPowder",4.8]], [["IronMix", 12.8]], 5, "second", [15, "kMF", 1, "second"])
let CokeCopperPowderSmelting = new AdvSimRecipe([["CokeFuel", 1],["CopperPowder",7.98]], [["CopperMix", 21.28]], 5, "second", [15, "kMF", 1, "second"])
    
let BlastFurnace = new AbstractMachine("Blast Furnace", 60000, 8, 8, [5, "MMF"], [216, "PP/H"])
    
export let CoalIronIngotBlastingSim = new RecipeSimulator(BlastFurnace, CoalIronIngotSmelting)
export let CoalIronMixBlastingSim = new RecipeSimulator(BlastFurnace, CoalIronMixSmelting)
export let CoalIronPowderBlastingSim = new RecipeSimulator(BlastFurnace, CoalIronPowderSmelting)
export let CoalCopperPowderBlastingSim = new RecipeSimulator(BlastFurnace, CoalCopperPowderSmelting)
export let CokeFuelBlastingSim = new RecipeSimulator(BlastFurnace, CokeFuelSmelting)
export let CokeBauxiteBlastingSim = new RecipeSimulator(BlastFurnace, CokeBauxiteSmelting)
export let CokeIronIngotBlastingSim = new RecipeSimulator(BlastFurnace, CokeIronIngotSmelting)
export let CokeIronMixBlastingSim = new RecipeSimulator(BlastFurnace, CokeIronMixSmelting)
export let CokeIronPowderBlastingSim = new RecipeSimulator(BlastFurnace, CokeIronPowderSmelting)
export let CokeCopperPowderBlastingSim = new RecipeSimulator(BlastFurnace, CokeCopperPowderSmelting)