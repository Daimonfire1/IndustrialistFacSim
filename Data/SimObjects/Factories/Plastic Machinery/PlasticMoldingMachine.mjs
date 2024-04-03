import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let BottleProduction = new AdvSimRecipe([["PlasticPellet", 20]], [["Bottle", 2]], 7, "second", [14, "kMF", 1, "second"])
let CasingProduction = new AdvSimRecipe([["PlasticPellet", 20]], [["PlasticCasing", 1]], 7, "second", [14, "kMF", 1, "second"])
    
let PlasticMoldingMachine = new AbstractMachine("Plastic Molding Machine", 100000, 4, 4, [500, "kMF"], [0, "PP/H"])
    
export let PlasticMoldingCasingMachineSim = new RecipeSimulator(PlasticMoldingMachine, BottleProduction)
export let PlasticMoldingBottleMachineSim = new RecipeSimulator(PlasticMoldingMachine, CasingProduction)