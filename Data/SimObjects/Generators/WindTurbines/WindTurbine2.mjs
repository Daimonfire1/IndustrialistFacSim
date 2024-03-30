import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let WindTurbine2Power = new MamyFluxStream(-8.4, "kMF", 1, "second")
let WindTurbine2Recipe = new AdvSimRecipe([], [], 1, "second", WindTurbine2Power)
export let WindTurbine2 = new AbstractGenerator(WindTurbine2Recipe, 1785, 4, 4, [50, "kMF"], [0, "hour"])