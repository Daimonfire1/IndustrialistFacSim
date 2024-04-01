import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let PlasticPelletProduction = new AdvSimRecipe([["MEG", 1],["PTA", 1]], [["PlasticPellet", 80]], 6.67, "second", [80, "kMF", 1, "second"])
    
let PlasticProductionFacility = new AbstractMachine(100000, 8, 15, [2.5, "MMF"], [999, "PP/H"]) //NOT CONFIRMED
    
export let PlasticProductionFacilitySim = new RecipeSimulator(PlasticProductionFacility, PlasticPelletProduction)