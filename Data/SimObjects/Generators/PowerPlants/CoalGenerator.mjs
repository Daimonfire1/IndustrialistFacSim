import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let CoalGenPower = new MamyFluxStream(-4.5, "kMF", 1, "second")
let CoalGenRecipe = new AdvSimRecipe([["Coal", 0.5], ["Water", 0.5]], [["Steam", 0.3]], 2, "second", CoalGenPower)
let CoalGen = new AbstractMachine("Caol Generator", 160, 2, 2, [50, "kMF"], [270, "PP/H"])

export let CoalGenSim = new RecipeSimulator(CoalGen, CoalGenRecipe)