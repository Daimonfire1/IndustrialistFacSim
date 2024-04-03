import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let GasolineGenPower = new MamyFluxStream(-12, "kMF", 1, "second")
let GasolineGenRecipe = new AdvSimRecipe([["Gasoline", 0.1]], [], 2, "second", GasolineGenPower)

let GasolineGenPowerE10 = new MamyFluxStream(-24, "kMF", 1, "second")
let GasolineGenRecipeE10 = new AdvSimRecipe([["GasolineE10", 0.1]], [], 10, "second", GasolineGenPowerE10)

let GasolineGen = new AbstractMachine("Gasoline Generator", 900, 2, 2, [100, "kMF"], [648, "PP/H"])

export let GasolineGenSim = new RecipeSimulator(GasolineGen, GasolineGenRecipe)
export let GasolineGenSimE10 = new RecipeSimulator(GasolineGen, GasolineGenRecipeE10)