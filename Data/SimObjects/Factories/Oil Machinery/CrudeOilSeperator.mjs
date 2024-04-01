import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let CrudeOilSeperation = new AdvSimRecipe([["HotCrudeOil", 1]], [["CrudeDiesel", 0.45],["Gasoline", 0.2],["Residue", 0.2]], 0.67, "second", [2250, "MF", 1, "second"])
    
let CrudeOilSeperator = new AbstractMachine(1500, 8, 10, [50, "kMF"], [432, "PP/H"])
    
export let CrudeOilSeperatorSim = new RecipeSimulator(CrudeOilSeperator, CrudeOilSeperation)