import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let WindTurbine1Power = new MamyFluxStream(-1.62, "kMF", 1, "second")
let WindTurbine1Recipe = new AdvSimRecipe([], [], 1, "second", WindTurbine1Power)
export let WindTurbine1 = new AbstractGenerator(WindTurbine1Recipe, 400, 2, 2, [5, "kMF"], [0, "hour"])