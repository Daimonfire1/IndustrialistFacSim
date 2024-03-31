import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let LargeTurbineRecipe100 = new AdvSimRecipe([[90, "Steam100c"]], [[3, "Water"]], 1, "second", [-120, "kMF", 1, "second"])

let LargeTurbineRecipe120 = new AdvSimRecipe([[90, "Steam120c"]], [[3, "Water"]], 1, "second", [-150, "kMF", 1, "second"])

let LargeTurbineRecipe150 = new AdvSimRecipe([[90, "Steam150c"]], [[3, "Water"]], 1, "second", [-240, "kMF", 1, "second"])

let LargeTurbineRecipe240 = new AdvSimRecipe([[90, "Steam240c"]], [[3, "Water"]], 1, "second", [-363.13, "kMF", 1, "second"])

let LargeTurbineRecipe300 = new AdvSimRecipe([[90, "Steam300c"]], [[3, "Water"]], 1, "second", [-450, "kMF", 1, "second"])

let LargeTurbineRecipe400 = new AdvSimRecipe([[90, "Steam400c"]], [[3, "Water"]], 1, "second", [-468, "kMF", 1, "second"])


let LargeTurbine = new AbstractMachine(4000, 5, 4, [100, "kMF"], [0, "PP/H"])

export let LargeTurbineRecipe100Sim = new RecipeSimulator(LargeTurbine, LargeTurbineRecipe100)
export let LargeTurbineRecipe120Sim = new RecipeSimulator(LargeTurbine, LargeTurbineRecipe120)
export let LargeTurbineRecipe150Sim = new RecipeSimulator(LargeTurbine, LargeTurbineRecipe150)
export let LargeTurbineRecipe240Sim = new RecipeSimulator(LargeTurbine, LargeTurbineRecipe240)
export let LargeTurbineRecipe300Sim = new RecipeSimulator(LargeTurbine, LargeTurbineRecipe300)
export let LargeTurbineRecipe400Sim = new RecipeSimulator(LargeTurbine, LargeTurbineRecipe400)