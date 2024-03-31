import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let WindTurbine1Power = new MamyFluxStream(-1.62, "kMF", 1, "second")
let WindTurbine1Recipe = new AdvSimRecipe([], [], 1, "second", WindTurbine1Power)
let WindTurbine1 = new AbstractMachine(400, 2, 2, [5, "kMF"], [0, "PP/H"])

export let WindTurbine1Sim = new RecipeSimulator(WindTurbine1, WindTurbine1Recipe)