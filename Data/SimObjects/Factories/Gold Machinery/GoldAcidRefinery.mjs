import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let RichSoilRefining = new AdvSimRecipe([["AceticAcid",2],["Water",6],["SoilRich", 1]], [["Residue",8],["Gold10", 1]], 5, "second", [100, "kMF", 1, "second"])
let SulfurRichSoilRefining = new AdvSimRecipe([["SulfuricAcid",4],["Water",4],["SoilRich", 1]], [["Residue",8],["Gold18", 1]], 5, "second", [100, "kMF", 1, "second"])
let Gold12Refining = new AdvSimRecipe([["AceticAcid",2],["Water",6],["Gold12", 1]], [["Residue",8],["Gold18", 1]], 5, "second", [100, "kMF", 1, "second"])
    
let GoldAcidRefinery = new AbstractMachine("Gold Acid Refinery", 1000000, 10, 18, [510, "kMF"], [216, "PP/H"])
    
export let RichSoilAcidRefinerySim = new RecipeSimulator(GoldAcidRefinery, RichSoilRefining)
export let RichSoilSulfurRefinerySim = new RecipeSimulator(GoldAcidRefinery, SulfurRichSoilRefining)
export let Gold12AcidRefinerySim = new RecipeSimulator(GoldAcidRefinery, Gold12Refining)