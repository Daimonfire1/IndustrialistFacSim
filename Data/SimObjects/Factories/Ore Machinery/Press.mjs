import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let CopperIngotPressing = new AdvSimRecipe([["CopperIngot", 1]], [["CopperPlate", 1]], 3.1, "second", [1290, "MF", 1, "second"])

let IronIngotPressing = new AdvSimRecipe([["IronIngot", 1]], [["IronPlate", 1]], 5.1, "second", [784, "MF", 1, "second"])

let SteelIngotPressing = new AdvSimRecipe([["SteelIngot", 1]], [["SteelPlate", 1]], 5.1, "second", [9804, "MF", 1, "second"])

let PlankPressing = new AdvSimRecipe([["Planks", 1]], [["PlankSquared", 0.25]], 5.1, "second", [784, "MF", 1, "second"])

let IronPlatePressing = new AdvSimRecipe([["IronPlate", 1]], [["IronPlateSquared", 0.25]], 5.1, "second", [59, "MF", 1, "second"])


let Press = new AbstractMachine("Press", 409, 4, 2, [250, "kMF"], [0, "PP/H"])


export let PressCopperIngotSim = new RecipeSimulator(Press, CopperIngotPressing)
export let PressIronIngotSim = new RecipeSimulator(Press, IronIngotPressing)
export let PressSteelIngotSim = new RecipeSimulator(Press, SteelIngotPressing)
export let PressPlankSim = new RecipeSimulator(Press, PlankPressing)
export let PressIronPlateSim = new RecipeSimulator(Press, IronPlatePressing)