import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let WaterFiltration = new AdvSimRecipe([["Water", 4]], [["FilteredWater", 3]], 2, "second", [7.5, "kMF", 1, "second"])
let WaterUnFiltration = new AdvSimRecipe([["FilteredWater", 4]], [["Water", 3]], 2, "second", [7.5, "kMF", 1, "second"])
let GasolineFiltration = new AdvSimRecipe([["Gasoline", 4]], [["CrudeDiesel", 3]], 2, "second", [7.5, "kMF", 1, "second"])
let RefinedDieselFiltration = new AdvSimRecipe([["RefinedDiesel", 4]], [["MachineOil", 2.4]], 2, "second", [7.5, "kMF", 1, "second"])
let ResidueMitosis = new AdvSimRecipe([["Residue", 4]], [["Residue", 4.4]], 2, "second", [7.5, "kMF", 1, "second"])
let HeavyOilFiltration = new AdvSimRecipe([["HeavyOil", 4]], [["CrudeOil", 3]], 2, "second", [7.5, "kMF", 1, "second"])
    
let FiltrationPlant = new AbstractMachine(20000, 8, 8, [250, "kMF"], [0, "PP/H"])
    
export let WaterFiltrationSim = new RecipeSimulator(FiltrationPlant, WaterFiltration)
export let WaterUnFiltrationSim = new RecipeSimulator(FiltrationPlant, WaterUnFiltration)
export let GasolineFiltrationSim = new RecipeSimulator(FiltrationPlant, GasolineFiltration)
export let RefinedDieselFiltrationSim = new RecipeSimulator(FiltrationPlant, RefinedDieselFiltration)
export let ResidueMitosisSim = new RecipeSimulator(FiltrationPlant, ResidueMitosis)
export let HeavyOilFiltrationSim = new RecipeSimulator(FiltrationPlant, HeavyOilFiltration)