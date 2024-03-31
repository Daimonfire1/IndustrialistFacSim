import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let SandExcavatorRecipe = new AdvSimRecipe([], [["Sand", 4]], 2, "second", [600, "kMF", 1, "second"])


let SandExcavator = new AbstractMachine(150000, 4, 4.5, [1.5, "MMF"], [0, "PP/H"])


export let SandExcavatorSim = new RecipeSimulator(SandExcavator, SandExcavatorRecipe)