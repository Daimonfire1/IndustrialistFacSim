import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";

let HeavyOilSeperation = new AdvSimRecipe([["HeavyOil", 4],["Steam",20]], [["Residue", 0.5],["MachineOil",2],["LightOil",1]], 5, "second", [100, "kMF", 1, "second"])
let LightOilSeperation = new AdvSimRecipe([["LightOil", 4],["Steam",20]], [["Residue", 1.5],["Diesel",2],["CrudeOil",0.5]], 5, "second", [100, "kMF", 1, "second"])

let IndustrialOilSeperator = new AbstractMachine(150000, 8, 8, [2.5, "MMF"], [800, "PP/H"]) //POLLUTION NOT CONFIRMED

export let IndustrialHeavyOilSeperatorSim = new RecipeSimulator(IndustrialOilSeperator, HeavyOilSeperation)
export let IndustrialLightOilSeperatorSim = new RecipeSimulator(IndustrialOilSeperator, LightOilSeperation)