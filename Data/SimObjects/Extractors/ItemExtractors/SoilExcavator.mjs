import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let SoilExcavatorRecipe = new AdvSimRecipe([["Water", 10]], [["SoilRich", 1]], 1, "second", [300, "kMF", 1, "second"])


let SoilExcavator = new AbstractMachine("Soil Excavator", 500000, 5, 2.5, [400, "kMF"], [0, "PP/H"])


export let SoilExcavatorSim = new RecipeSimulator(SoilExcavator, SoilExcavatorRecipe)