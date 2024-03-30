import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let SolarPanel2Power = new MamyFluxStream(-1.35, "kMF", 1, "second")
let SolarPanel2Recipe = new AdvSimRecipe([], [], 1, "second", SolarPanel2Power)
export let SolarPanel2 = new AbstractGenerator(SolarPanel2Recipe, 1500, 2, 4, [5, "kMF"], [0, "hour"])