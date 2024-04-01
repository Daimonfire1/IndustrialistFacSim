import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let AtmoDistillationRecipe = new AdvSimRecipe([["FrackingOil", 200]], [["Residue", 10],["HeavyOil",20],["LightOil",50],["Naphta",10],["Gasoline",20],["WaterFreeGas",60],["CrudeOil",10]], 8, "second", [625, "kMF", 1, "second"])
    
let AtmosphericDistillationPlant = new AbstractMachine(1000000, 16, 16, [5, "MMF"], [1000, "PP/H"]) //POLLUTION NOT CONFIRMED
    
export let AtmosphericDistillationPlantSim = new RecipeSimulator(AtmosphericDistillationPlant, AtmoDistillationRecipe)