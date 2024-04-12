import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let CoalGrind = new AdvSimRecipe([["Coal", 4]], [["BlackDye", 3]], 12, "second", [33, "kMF", 1, "second"])

let OakLogGrind = new AdvSimRecipe([["OakLog", 1],["Water", 10]], [["Paper", 3]], 12, "second", [33, "kMF", 1, "second"])

let RawIronGrind = new AdvSimRecipe([["RawIron", 3.2]], [["IronPowder", 1.9]], 12, "second", [33, "kMF", 1, "second"])

let RawCopperGrind = new AdvSimRecipe([["RawCopper", 1]], [["CopperPowder", 2.66]], 12, "second", [33, "kMF", 1, "second"])

let GravelGrind = new AdvSimRecipe([["Gravel", 8]], [["Sand", 10]], 12, "second", [33, "kMF", 1, "second"])

let BauxiteGrind = new AdvSimRecipe([["BauxiteResidue", 8]], [["BauxiteCrushed", 6]], 12, "second", [33, "kMF", 1, "second"])

let AluminaGrind = new AdvSimRecipe([["Alumina", 4]], [["AluminaDust", 4]], 12, "second", [33, "kMF", 1, "second"])


let Grinder = new AbstractMachine("Grinder", 10000, 3, 6, [500, "kMF"], [0, "PP/H"])


export let GrinderCoalGrind = new RecipeSimulator(Grinder, CoalGrind)
export let GrinderOakLogGrind = new RecipeSimulator(Grinder, OakLogGrind)
export let GrinderRawIronGrind = new RecipeSimulator(Grinder, RawIronGrind)
export let GrinderRawCopperGrind = new RecipeSimulator(Grinder, RawCopperGrind)
export let GrinderGravelGrind = new RecipeSimulator(Grinder, GravelGrind)
export let GrinderBauxiteGrind = new RecipeSimulator(Grinder, BauxiteGrind)
export let GrinderAluminaGrind = new RecipeSimulator(Grinder, AluminaGrind)