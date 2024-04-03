import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let CoalLiquefication100c = new AdvSimRecipe([["Coal", 40],["CrudeOil",10],["Steam100c",200]], [["Residue", 10],["HeavyOil",40],["LightOil",30]], 40, "second", [1, "MMF", 1, "second"])
let CoalLiquefication120c = new AdvSimRecipe([["Coal", 40],["CrudeOil",10],["Steam120c",200]], [["Residue", 10],["HeavyOil",40],["LightOil",30]], 38, "second", [1, "MMF", 1, "second"])
let CoalLiquefication150c = new AdvSimRecipe([["Coal", 40],["CrudeOil",10],["Steam150c",200]], [["Residue", 10],["HeavyOil",40],["LightOil",30]], 35, "second", [1, "MMF", 1, "second"])
let CoalLiquefication240c = new AdvSimRecipe([["Coal", 40],["CrudeOil",10],["Steam240c",200]], [["Residue", 10],["HeavyOil",40],["LightOil",30]], 26, "second", [1, "MMF", 1, "second"])
let CoalLiquefication300c = new AdvSimRecipe([["Coal", 40],["CrudeOil",10],["Steam300c",200]], [["Residue", 10],["HeavyOil",40],["LightOil",30]], 20, "second", [1, "MMF", 1, "second"])
let CoalLiquefication400c = new AdvSimRecipe([["Coal", 40],["CrudeOil",10],["Steam400c",200]], [["Residue", 10],["HeavyOil",40],["LightOil",30]], 10, "second", [1, "MMF", 1, "second"])
    
let CoalLiqueficationPlant = new AbstractMachine("Coal Liquefication Plant", 750000, 20, 20, [25, "MMF"], [5000, "PP/H"]) //POLLUTION NOT CONFIRMED
    
export let CoalLiqueficationPlant100Sim = new RecipeSimulator(CoalLiqueficationPlant, CoalLiquefication100c)
export let CoalLiqueficationPlant120Sim = new RecipeSimulator(CoalLiqueficationPlant, CoalLiquefication120c)
export let CoalLiqueficationPlant150Sim = new RecipeSimulator(CoalLiqueficationPlant, CoalLiquefication150c)
export let CoalLiqueficationPlant240Sim = new RecipeSimulator(CoalLiqueficationPlant, CoalLiquefication240c)
export let CoalLiqueficationPlant300Sim = new RecipeSimulator(CoalLiqueficationPlant, CoalLiquefication300c)
export let CoalLiqueficationPlant400Sim = new RecipeSimulator(CoalLiqueficationPlant, CoalLiquefication400c)