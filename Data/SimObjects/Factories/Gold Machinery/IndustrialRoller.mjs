import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let IndustrialCopperPlateRolling = new AdvSimRecipe([["CopperPlate", 2]], [["CopperWire", 12]], 8, "second", [500, "MF", 1, "second"])

let IndustrialIronPlateRolling = new AdvSimRecipe([["IronPlate", 2]], [["IronCoil", 4]], 8, "second", [750, "MF", 1, "second"])

let IndustrialSteelIngotRolling = new AdvSimRecipe([["SteelIngot", 2]], [["SteelRod", 2]], 8, "second", [6.25, "kMF", 1, "second"])

let IndustrialSteelPlateRolling = new AdvSimRecipe([["SteelPlate", 2]], [["Gear", 2]], 8, "second", [6.25, "kMF", 1, "second"])

let IndustrialIronIngotRolling = new AdvSimRecipe([["IronIngot", 2]], [["Nail", 16]], 8, "second", [750, "MF", 1, "second"])

let IndustrialFerroAluminumRolling = new AdvSimRecipe([["FerroAluminiumIngot", 2]], [["FerroAluminiumMagnet", 1]], 8, "second", [750, "MF", 1, "second"])


let IndustrialRoller = new AbstractMachine("Industrial Roller", 150000, 4, 2, [250, "kMF"], [0, "PP/H"])


export let IndustrialRollerCopperWireSim = new RecipeSimulator(IndustrialRoller, IndustrialCopperPlateRolling)
export let IndustrialRollerIronCoilSim = new RecipeSimulator(IndustrialRoller, IndustrialIronPlateRolling)
export let IndustrialRollerSteelRodSim = new RecipeSimulator(IndustrialRoller, IndustrialSteelIngotRolling)
export let IndustrialRollerGearSim = new RecipeSimulator(IndustrialRoller, IndustrialSteelPlateRolling)
export let IndustrialRollerNailSim = new RecipeSimulator(IndustrialRoller, IndustrialIronIngotRolling)
export let IndustrialRollerFerroAluminumSim = new RecipeSimulator(IndustrialRoller, IndustrialFerroAluminumRolling)