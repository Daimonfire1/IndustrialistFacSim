import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
import { MamyFluxStream } from "../../../BaseDefinitions/PowerDefs/MamyFluxStream.mjs";

let CompactCoalGenPower = new MamyFluxStream(-13.5, "kMF", 1, "second")
let CompactCoalGenRecipe = new AdvSimRecipe([["Coal", 2]], [], 3, "second", CompactCoalGenPower)
let CompactCoalGen = new AbstractMachine(550, 4, 3, [50, "kMF"], [821, "PP/H"])

export let CompactCoalGenSim = new RecipeSimulator(CompactCoalGen, CompactCoalGenRecipe)