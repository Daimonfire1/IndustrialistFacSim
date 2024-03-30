import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let LargeTurbinePower = new MamyFluxStream(-1.95, "kMF", 1, "second")
let LargeTurbineRecipe = new AdvSimRecipe([0.3, "Steam"], [0.009, "Water"], 1, "second", LargeTurbinePower)
export let LargeTurbine = new AbstractGenerator(LargeTurbineRecipe, 40, 1, 2, [100, "kMF"], [0, "hour"])