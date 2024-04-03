import { AbstractGenerator } from "../../../BaseDefinitions/AbstractDefs/AbstractGeneratorDef.mjs";
import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { SimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/BasicRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let SolarPanel2Power = new MamyFluxStream(-1.35, "kMF", 1, "second")
let SolarPanel2Recipe = new AdvSimRecipe([], [], 1, "second", SolarPanel2Power)
let SolarPanel2 = new AbstractMachine("Solar Panel 2", 1500, 2, 4, [5, "kMF"], [0, "PP/H"])

export let SolarPanel2Sim = new RecipeSimulator(SolarPanel2, SolarPanel2Recipe)