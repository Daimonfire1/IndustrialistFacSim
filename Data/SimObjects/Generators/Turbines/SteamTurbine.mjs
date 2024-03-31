import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let SteamTurbinePower = new MamyFluxStream(-1.95, "kMF", 1, "second")
let SteamTurbineRecipe = new AdvSimRecipe([[0.3, "Steam"]], [[0.009, "Water"]], 1, "second", SteamTurbinePower)
let SteamTurbine = new AbstractMachine(40, 1, 2, [100, "kMF"], [0, "PP/H"])

export let SteamTurbineSim = new RecipeSimulator(SteamTurbine, SteamTurbineRecipe)