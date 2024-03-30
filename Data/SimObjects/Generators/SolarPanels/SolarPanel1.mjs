import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let SolarPanel1Power = new MamyFluxStream(-264, "MF", 1, "second")
let SolarPanel1Recipe = new AdvSimRecipe([], [], 1, "second", SolarPanel1Power)
export let SolarPanel1 = new AbstractGenerator(SolarPanel1Recipe, 80, 2, 2, [1, "kMF"], [0, "hour"])