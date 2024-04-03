import { AbstractMachine } from "../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let ScrubbingWater = new AdvSimRecipe([["Water", 2]], [["Residue", 4]], 2, "second", [2.8, "kMF", 1, "second"])
let ScrubbingFilteredWater = new AdvSimRecipe([["FilteredWater", 1]], [["Residue", 4]], 2, "second", [2.8, "kMF", 1, "second"])
    
let ScrubberNorm = new AbstractMachine("Scrubber (Normal Water)", 30000, 8, 8, [500, "kMF"], [-3240, "PP/H"])
let ScrubberFiltered = new AbstractMachine("Scrubber (Filtered Water)", 30000, 8, 8, [500, "kMF"], [-3564, "PP/H"])
    
export let ScrubberNormSim = new RecipeSimulator(ScrubberNorm, ScrubbingWater)
export let ScrubberFilterSim = new RecipeSimulator(ScrubberFiltered, ScrubbingFilteredWater)