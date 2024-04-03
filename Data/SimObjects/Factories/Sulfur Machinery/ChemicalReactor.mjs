import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let RubberProduction = new AdvSimRecipe([["Naphta", 10],["HeavyOil", 16]], [["Residue", 4],["Rubber", 8]], 6, "second", [500, "kMF", 1, "second"])
let SulfuricAcidProduction = new AdvSimRecipe([["SulfurTrioxide", 20],["Water", 20]], [["SulfuricAcid", 15]], 6, "second", [500, "kMF", 1, "second"])
let SulfuricAcidCatalystProduction = new AdvSimRecipe([["SulfurTrioxide", 20],["Water", 20],["SulfuricAcid", 2]], [["SulfuricAcid", 15]], 3, "second", [1, "MMF", 1, "second"])
let GasE10Production = new AdvSimRecipe([["Gasoline", 10],["Ethanol", 1]], [["GasolineE10", 11]], 6, "second", [1, "MMF", 1, "second"])
    
let ChemicalReactor = new AbstractMachine("Chemical Reactor", 750000, 10, 10, [5, "MMF"], [999, "PP/H"]) //NOT CONFIRMED
    
export let RubberReactorSim = new RecipeSimulator(ChemicalReactor, RubberProduction)
export let SulfuricAcidReactorSim = new RecipeSimulator(ChemicalReactor, SulfuricAcidProduction)
export let SulfuricAcidCatalystReactorSim = new RecipeSimulator(ChemicalReactor, SulfuricAcidCatalystProduction)
export let GasE10ReactorSim = new RecipeSimulator(ChemicalReactor, GasE10Production)