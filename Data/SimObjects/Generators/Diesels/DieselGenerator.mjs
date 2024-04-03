import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let DieselGenRecipeCrude = new AdvSimRecipe([["CrudeDiesel", 0.1]], [], 5, "second", [-55.2, "kMF", 1, "second"])

let DieselGenRecipePoor = new AdvSimRecipe([["PoorQualityDiesel", 0.1]], [], 6, "second", [-66, "kMF", 1, "second"])

let DieselGenRecipeNormal = new AdvSimRecipe([["Diesel", 0.1]], [], 7.66, "second", [-78, "kMF", 1, "second"])

let DieselGenRecipeRefined = new AdvSimRecipe([["RefinedDiesel", 0.1]], [], 10.33, "second", [-90, "kMF", 1, "second"])

let DieselGen = new AbstractMachine("Diesel Generator", 4000, 8, 4, [250, "kMF"], [648, "PP/H"])

export let DieselGenSimCrude = new RecipeSimulator(DieselGen, DieselGenRecipeCrude)
export let DieselGenSimPoor = new RecipeSimulator(DieselGen, DieselGenRecipePoor)
export let DieselGenSimNormal = new RecipeSimulator(DieselGen, DieselGenRecipeNormal)
export let DieselGenSimRefined = new RecipeSimulator(DieselGen, DieselGenRecipeRefined)