import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let AdvancedCrudeOilSeperation = new AdvSimRecipe([["Steam", 500],["CrudeOil",40]], [["Residue", 5],["CokeFuel",4],["LightOil",20],["HydrogenSulfide",12]], 10, "second", [2.5, "MMF", 1, "second"])
let AdvancedHeavyOilSeperation = new AdvSimRecipe([["Steam", 500],["HeavyOil",40]], [["Residue", 10],["CokeFuel",44]], 10, "second", [2.5, "MMF", 1, "second"])
let AdvancedFrackingOilSeperation = new AdvSimRecipe([["Steam", 500],["FrackingOil",40]], [["Residue", 15],["HeavyOil",20]], 10, "second", [2.5, "MMF", 1, "second"])
let AdvancedLightOilSeperation = new AdvSimRecipe([["Steam", 500],["LightOil",40]], [["Residue", 15],["HydrogenSulfide",6],["HeavyOil",10]], 10, "second", [2.5, "MMF", 1, "second"])
    
let AdvancedOilSeperator = new AbstractMachine("Advanced Oil Seperator",1250000, 22, 22, [25, "MMF"], [3000, "PP/H"]) //POLLUTION NOT CONFIRMED
    
export let AdvancedCrudeOilSeperatorSim = new RecipeSimulator(AdvancedOilSeperator, AdvancedCrudeOilSeperation)
export let AdvancedHeavyOilSeperatorSim = new RecipeSimulator(AdvancedOilSeperator, AdvancedHeavyOilSeperation)
export let AdvancedFrackingOilSeperatorSim = new RecipeSimulator(AdvancedOilSeperator, AdvancedFrackingOilSeperation)
export let AdvancedLightOilSeperatorSim = new RecipeSimulator(AdvancedOilSeperator, AdvancedLightOilSeperation)