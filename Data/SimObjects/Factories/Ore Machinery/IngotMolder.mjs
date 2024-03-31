import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let LiquidCopperRecipe = new AdvSimRecipe([["LiquidCopper", 2]], [["CopperIngot", 1]], 2, "second", [150, "MF", 1, "second"])

let LiquidSulfurRecipe = new AdvSimRecipe([["LiquidSulfur", 2]], [["Sulfur", 1]], 2, "second", [150, "MF", 1, "second"])

let LiquidIronRecipe = new AdvSimRecipe([["LiquidIron", 2]], [["IronIngot", 1]], 2, "second", [150, "MF", 1, "second"])

let LiquidGoldRecipe = new AdvSimRecipe([["LiquidGold", 2]], [["GoldIngot", 1]], 2, "second", [150, "MF", 1, "second"])

let LiquidFerroAluminumRecipe = new AdvSimRecipe([["MoltenFerroaluminiumAlloy", 2]], [["FerroAluminiumIngot", 1]], 2, "second", [150, "MF", 1, "second"])

let LiquidPurpleGoldRecipe = new AdvSimRecipe([["MoltenPurpleGold", 2]], [["PurpleGoldIngot", 1]], 2, "second", [150, "MF", 1, "second"])

let LiquidAluminiumRecipe = new AdvSimRecipe([["LiquidAluminium", 2]], [["AluminiumIngot", 1]], 2, "second", [150, "MF", 1, "second"])

let LiquidGlassRecipe = new AdvSimRecipe([["LiquidGlass", 2]], [["Glass", 1]], 2, "second", [150, "MF", 1, "second"])


let IngotMolder = new AbstractMachine(150, 4, 2, [25, "kMF"], [150, "PP/H"])


export let IngotMolderCopperSim = new RecipeSimulator(IngotMolder, LiquidCopperRecipe)
export let IngotMolderSulfurSim = new RecipeSimulator(IngotMolder, LiquidSulfurRecipe)
export let IngotMolderIronSim = new RecipeSimulator(IngotMolder, LiquidIronRecipe)
export let IngotMolderGoldSim = new RecipeSimulator(IngotMolder, LiquidGoldRecipe)
export let IngotMolderFerroAluminumSim = new RecipeSimulator(IngotMolder, LiquidFerroAluminumRecipe)
export let IngotMolderPurpleGoldSim = new RecipeSimulator(IngotMolder, LiquidPurpleGoldRecipe)
export let IngotMolderAluminiumSim = new RecipeSimulator(IngotMolder, LiquidAluminiumRecipe)
export let IngotMolderGlassSim = new RecipeSimulator(IngotMolder, LiquidGlassRecipe)