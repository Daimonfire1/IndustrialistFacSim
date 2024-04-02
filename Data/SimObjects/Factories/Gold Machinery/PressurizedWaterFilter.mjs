import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let RichSoilFiltering = new AdvSimRecipe([["SoilRich", 4],["Water",20]], [["Residue", 8],["Gold8",2]], 5, "second", [200, "kMF", 1, "second"])
let Gold10Filtering = new AdvSimRecipe([["Gold10", 4],["Water",20]], [["Residue", 4],["Gold12",2]], 5, "second", [200, "kMF", 1, "second"])
let Gold18Filtering = new AdvSimRecipe([["Gold18", 4],["Water",20]], [["Residue", 4],["Gold24",2]], 5, "second", [200, "kMF", 1, "second"])
    
let PressurizedWaterFilter = new AbstractMachine("Pressurized Water Filter", 350000, 6, 8, [1.1, "MMF"], [0, "PP/H"])
    
export let RichSoilFilterSim = new RecipeSimulator(PressurizedWaterFilter, RichSoilFiltering)
export let Gold10FilterSim = new RecipeSimulator(PressurizedWaterFilter, Gold10Filtering)
export let Gold18FilterSim = new RecipeSimulator(PressurizedWaterFilter, Gold18Filtering)