import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let GoldDrilling = new AdvSimRecipe([], [["Gold10", 0.1]], 30, "second", [900, "kMF", 1, "second"])
    
let GoldDrill = new AbstractMachine("Gold Drill", 25000, 6, 2, [1.5, "MMF"], [0, "PP/H"]) //pollution not confirmed
    
export let GoldDrillSim = new RecipeSimulator(GoldDrill, GoldDrilling
)