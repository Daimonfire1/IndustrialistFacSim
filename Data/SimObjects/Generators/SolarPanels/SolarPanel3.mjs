import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let SolarPanel3Power = new MamyFluxStream(-9.6, "kMF", 1, "second")
let SolarPanel3Recipe = new AdvSimRecipe([], [], 1, "second", SolarPanel3Power)
let SolarPanel3 = new AbstractMachine(5000, 4, 4, [50, "kMF"], [0, "PP/H"])

export let SolarPanel3Sim = new RecipeSimulator(SolarPanel3, SolarPanel3Recipe)