import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let SolarPanel3Power = new MamyFluxStream(-9.6, "kMF", 1, "second")
let SolarPanel3Recipe = new AdvSimRecipe([], [], 1, "second", SolarPanel3Power)
export let SolarPanel3 = new AbstractGenerator(SolarPanel3Recipe, 5000, 4, 4, [50, "kMF"], [0, "hour"])