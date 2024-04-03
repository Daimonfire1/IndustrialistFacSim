import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let SolarPanel1Power = new MamyFluxStream(-264, "MF", 1, "second")
let SolarPanel1Recipe = new AdvSimRecipe([], [], 1, "second", SolarPanel1Power)
let SolarPanel1 = new AbstractMachine("Solar Panel 1", 80, 2, 2, [1, "kMF"], [0, "PP/H"])

export let SolarPanel1Sim = new RecipeSimulator(SolarPanel1, SolarPanel1Recipe)