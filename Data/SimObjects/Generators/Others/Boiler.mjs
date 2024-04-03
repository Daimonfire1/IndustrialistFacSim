import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let WaterBoil = new AdvSimRecipe([["Water", 3],["Water", 3]], [["Steam", 90],["Water", 3]], 1, "second", [0, "MF", 1, "second"])
let Water100Boil = new AdvSimRecipe([["Water", 3],["Water100c", 3]], [["Steam100c", 90],["Water", 3]], 1, "second", [0, "MF", 1, "second"])
let Water120Boil = new AdvSimRecipe([["Water", 3],["Water120c", 3]], [["Steam120c", 90],["Water", 3]], 1, "second", [0, "MF", 1, "second"])
let Water150Boil = new AdvSimRecipe([["Water", 3],["Water150c", 3]], [["Steam150c", 90],["Water", 3]], 1, "second", [0, "MF", 1, "second"])
let Water240Boil = new AdvSimRecipe([["Water", 3],["Water240c", 3]], [["Steam240c", 90],["Water", 3]], 1, "second", [0, "MF", 1, "second"])
let Water300Boil = new AdvSimRecipe([["Water", 3],["Water300c", 3]], [["Steam300c", 90],["Water", 3]], 1, "second", [0, "MF", 1, "second"])
let Water400Boil = new AdvSimRecipe([["Water", 3],["Water400c", 3]], [["Steam400c", 90],["Water", 3]], 1, "second", [0, "MF", 1, "second"])


let Boiler = new AbstractMachine("Boiler", 900, 6, 8, [0, "MF"], [0, "PP/H"])


export let BoilerSim = new RecipeSimulator(Boiler, WaterBoil)
export let Boiler100Sim = new RecipeSimulator(Boiler, Water100Boil)
export let Boiler120Sim = new RecipeSimulator(Boiler, Water120Boil)
export let Boiler150Sim = new RecipeSimulator(Boiler, Water150Boil)
export let Boiler240Sim = new RecipeSimulator(Boiler, Water240Boil)
export let Boiler300Sim = new RecipeSimulator(Boiler, Water300Boil)
export let Boiler400Sim = new RecipeSimulator(Boiler, Water400Boil)