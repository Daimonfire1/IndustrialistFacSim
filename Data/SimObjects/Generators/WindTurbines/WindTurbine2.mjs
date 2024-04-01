import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let WindTurbine2Power = new MamyFluxStream(-8.4, "kMF", 1, "second")
let WindTurbine2Recipe = new AdvSimRecipe([], [], 1, "second", WindTurbine2Power)
let WindTurbine2 = new AbstractMachine(1785, 4, 4, [50, "kMF"], [0, "PP/H"])

export let WindTurbine2Sim = new RecipeSimulator(WindTurbine2, WindTurbine2Recipe)