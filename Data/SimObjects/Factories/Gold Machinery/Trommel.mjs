import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let SoilTrommeling = new AdvSimRecipe([["Water", 80],["Soil",40]], [["SoilRich", 16],["BauxiteResidue",8],["Gravel",4],["Sand",4]], 28, "second", [17.9, "kMF", 1, "second"])
    
let Trommel = new AbstractMachine("Trommel", 1000000, 6, 12, [600, "kMF"], [0, "PP/H"])
    
export let TrommelSim = new RecipeSimulator(Trommel, SoilTrommeling)