import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let CopperPlateRolling = new AdvSimRecipe([["CopperPlate", 2]], [["CopperWire", 12]], 8, "second", [500, "MF", 1, "second"])

let IronPlateRolling = new AdvSimRecipe([["IronPlate", 2]], [["IronCoil", 4]], 8, "second", [750, "MF", 1, "second"])

let SteelIngotRolling = new AdvSimRecipe([["SteelIngot", 2]], [["SteelRod", 2]], 8, "second", [6.25, "kMF", 1, "second"])

let SteelPlateRolling = new AdvSimRecipe([["SteelPlate", 2]], [["Gear", 2]], 8, "second", [6.25, "kMF", 1, "second"])

let IronIngotRolling = new AdvSimRecipe([["IronIngot", 2]], [["Nail", 16]], 8, "second", [750, "MF", 1, "second"])


let Roller = new AbstractMachine("Roller", 411, 4, 2, [250, "kMF"], [0, "PP/H"])


export let RollerCopperWireSim = new RecipeSimulator(Roller, CopperPlateRolling)
export let RollerIronCoilSim = new RecipeSimulator(Roller, IronPlateRolling)
export let RollerSteelRodSim = new RecipeSimulator(Roller, SteelIngotRolling)
export let RollerGearSim = new RecipeSimulator(Roller, SteelPlateRolling)
export let RollerNailSim = new RecipeSimulator(Roller, IronIngotRolling)