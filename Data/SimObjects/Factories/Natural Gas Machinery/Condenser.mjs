import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let GasCondensing = new AdvSimRecipe([["RawGas", 60]], [["WaterFreeGas", 30],["Water",1.5],["CrudeOil",0.3]], 1, "second", [21, "kMF", 1, "second"])
    
let Condenser = new AbstractMachine(150000, 6, 14, [1, "MMF"], [0, "PP/H"])
    
export let CondenserSim = new RecipeSimulator(Condenser, GasCondensing)