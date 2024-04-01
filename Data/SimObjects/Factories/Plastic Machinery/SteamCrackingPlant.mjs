import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let CrudeOilCracking100 = new AdvSimRecipe([["CrudeOil", 2],["Steam100c",150]], [["Paraxylene", 2],["Ethylene",3]], 40, "second", [60, "kMF", 1, "second"])
let CrudeOilCracking120 = new AdvSimRecipe([["CrudeOil", 2],["Steam120c",150]], [["Paraxylene", 2],["Ethylene",3]], 38, "second", [60, "kMF", 1, "second"])
let CrudeOilCracking150 = new AdvSimRecipe([["CrudeOil", 2],["Steam150c",150]], [["Paraxylene", 2],["Ethylene",3]], 35, "second", [60, "kMF", 1, "second"])
let CrudeOilCracking240 = new AdvSimRecipe([["CrudeOil", 2],["Steam240c",150]], [["Paraxylene", 2],["Ethylene",3]], 26, "second", [60, "kMF", 1, "second"])
let CrudeOilCracking300 = new AdvSimRecipe([["CrudeOil", 2],["Steam300c",150]], [["Paraxylene", 2],["Ethylene",3]], 20, "second", [60, "kMF", 1, "second"])
let CrudeOilCracking400 = new AdvSimRecipe([["CrudeOil", 2],["Steam400c",150]], [["Paraxylene", 2],["Ethylene",3]], 10, "second", [60, "kMF", 1, "second"])

let LightOilCracking100 = new AdvSimRecipe([["LightOil", 15],["Steam100c",150]], [["CrudeDiesel", 12],["Residue",3]], 40, "second", [60, "kMF", 1, "second"])
let LightOilCracking120 = new AdvSimRecipe([["LightOil", 15],["Steam120c",150]], [["CrudeDiesel", 12],["Residue",3]], 38, "second", [60, "kMF", 1, "second"])
let LightOilCracking150 = new AdvSimRecipe([["LightOil", 15],["Steam150c",150]], [["CrudeDiesel", 12],["Residue",3]], 35, "second", [60, "kMF", 1, "second"])
let LightOilCracking240 = new AdvSimRecipe([["LightOil", 15],["Steam240c",150]], [["CrudeDiesel", 12],["Residue",3]], 26, "second", [60, "kMF", 1, "second"])
let LightOilCracking300 = new AdvSimRecipe([["LightOil", 15],["Steam300c",150]], [["CrudeDiesel", 12],["Residue",3]], 20, "second", [60, "kMF", 1, "second"])
let LightOilCracking400 = new AdvSimRecipe([["LightOil", 15],["Steam400c",150]], [["CrudeDiesel", 12],["Residue",3]], 10, "second", [60, "kMF", 1, "second"])

let HeavyOilCracking100 = new AdvSimRecipe([["HeavyOil", 20],["Steam100c",150]], [["LightOil", 12],["Residue",8]], 40, "second", [60, "kMF", 1, "second"])
let HeavyOilCracking120 = new AdvSimRecipe([["HeavyOil", 20],["Steam120c",150]], [["LightOil", 12],["Residue",8]], 38, "second", [60, "kMF", 1, "second"])
let HeavyOilCracking150 = new AdvSimRecipe([["HeavyOil", 20],["Steam150c",150]], [["LightOil", 12],["Residue",8]], 35, "second", [60, "kMF", 1, "second"])
let HeavyOilCracking240 = new AdvSimRecipe([["HeavyOil", 20],["Steam240c",150]], [["LightOil", 12],["Residue",8]], 26, "second", [60, "kMF", 1, "second"])
let HeavyOilCracking300 = new AdvSimRecipe([["HeavyOil", 20],["Steam300c",150]], [["LightOil", 12],["Residue",8]], 20, "second", [60, "kMF", 1, "second"])
let HeavyOilCracking400 = new AdvSimRecipe([["HeavyOil", 20],["Steam400c",150]], [["LightOil", 12],["Residue",8]], 10, "second", [60, "kMF", 1, "second"])
    
let SteamCrackingPlant = new AbstractMachine(150000, 8, 8, [1, "MMF"], [432, "PP/H"])
    
export let CrudeOilCracking100Sim = new RecipeSimulator(SteamCrackingPlant, CrudeOilCracking100)
export let CrudeOilCracking120Sim = new RecipeSimulator(SteamCrackingPlant, CrudeOilCracking120)
export let CrudeOilCracking150Sim = new RecipeSimulator(SteamCrackingPlant, CrudeOilCracking150)
export let CrudeOilCracking240Sim = new RecipeSimulator(SteamCrackingPlant, CrudeOilCracking240)
export let CrudeOilCracking300Sim = new RecipeSimulator(SteamCrackingPlant, CrudeOilCracking300)
export let CrudeOilCracking400Sim = new RecipeSimulator(SteamCrackingPlant, CrudeOilCracking400)

export let LightOilCracking100Sim = new RecipeSimulator(SteamCrackingPlant, LightOilCracking100)
export let LightOilCracking120Sim = new RecipeSimulator(SteamCrackingPlant, LightOilCracking120)
export let LightOilCracking150Sim = new RecipeSimulator(SteamCrackingPlant, LightOilCracking150)
export let LightOilCracking240Sim = new RecipeSimulator(SteamCrackingPlant, LightOilCracking240)
export let LightOilCracking300Sim = new RecipeSimulator(SteamCrackingPlant, LightOilCracking300)
export let LightOilCracking400Sim = new RecipeSimulator(SteamCrackingPlant, LightOilCracking400)

export let HeavyOilCracking100Sim = new RecipeSimulator(SteamCrackingPlant, HeavyOilCracking100)
export let HeavyOilCracking120Sim = new RecipeSimulator(SteamCrackingPlant, HeavyOilCracking120)
export let HeavyOilCracking150Sim = new RecipeSimulator(SteamCrackingPlant, HeavyOilCracking150)
export let HeavyOilCracking240Sim = new RecipeSimulator(SteamCrackingPlant, HeavyOilCracking240)
export let HeavyOilCracking300Sim = new RecipeSimulator(SteamCrackingPlant, HeavyOilCracking300)
export let HeavyOilCracking400Sim = new RecipeSimulator(SteamCrackingPlant, HeavyOilCracking400)