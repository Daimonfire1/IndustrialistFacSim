import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let ChairRecipe = new AdvSimRecipe([["Planks", 12],["Nail", 20]], [["Chair", 1]], 17.2, "second", [3488, "MF", 1, "second"])

let TireRecipe = new AdvSimRecipe([["TireRim", 1],["Rubber", 4]], [["Tire", 1]], 17.2, "second", [3488, "MF", 1, "second"])

let TireRimRecipe = new AdvSimRecipe([["AluminiumIngot", 2],["SteelIngot", 4]], [["TireRim", 1]], 17.2, "second", [3488, "MF", 1, "second"])

let InsulatedWireRecipe = new AdvSimRecipe([["Rubber", 20],["CopperWire", 40]], [["InsulatedWire", 40]], 17.2, "second", [3488, "MF", 1, "second"])

let CrankshaftRecipe = new AdvSimRecipe([["SteelRod", 2],["Gear", 4]], [["Crankshaft", 1]], 17.2, "second", [3488, "MF", 1, "second"])

let GearboxRecipe = new AdvSimRecipe([["PlasticCasing", 2],["Crankshaft", 1]], [["Gearbox", 1]], 17.2, "second", [3488, "MF", 1, "second"])

let ToyRecipe = new AdvSimRecipe([["BlackDye", 6],["Planks", 3]], [["Toy", 1]], 17.2, "second", [3488, "MF", 1, "second"])


let CraftAssembler = new AbstractMachine(1000, 8, 4, [250, "kMF"], [0, "PP/H"])


export let ChairCraftSim = new RecipeSimulator(CraftAssembler, ChairRecipe)
export let TireCraftSim = new RecipeSimulator(CraftAssembler, TireRecipe)
export let TireRimCraftSim = new RecipeSimulator(CraftAssembler, TireRimRecipe)
export let InsulatedWireCraftSim = new RecipeSimulator(CraftAssembler, InsulatedWireRecipe)
export let CrankshaftCraftSim = new RecipeSimulator(CraftAssembler, CrankshaftRecipe)
export let GearboxCraftSim = new RecipeSimulator(CraftAssembler, GearboxRecipe)
export let ToyCraftSim = new RecipeSimulator(CraftAssembler, ToyRecipe)