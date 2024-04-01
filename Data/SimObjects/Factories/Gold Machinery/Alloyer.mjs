import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let AluminumAlloying100 = new AdvSimRecipe([["IronIngot", 4],["AluminiumIngot",2],["Steam100c",200]], [["MoltenFerroaluminiumAlloy", 2]], 40, "second", [150, "kMF", 1, "second"])
let AluminumAlloying120 = new AdvSimRecipe([["IronIngot", 4],["AluminiumIngot",2],["Steam120c",200]], [["MoltenFerroaluminiumAlloy", 2]], 38, "second", [150, "kMF", 1, "second"])
let AluminumAlloying150 = new AdvSimRecipe([["IronIngot", 4],["AluminiumIngot",2],["Steam150c",200]], [["MoltenFerroaluminiumAlloy", 2]], 35, "second", [150, "kMF", 1, "second"])
let AluminumAlloying240 = new AdvSimRecipe([["IronIngot", 4],["AluminiumIngot",2],["Steam240c",200]], [["MoltenFerroaluminiumAlloy", 2]], 26, "second", [150, "kMF", 1, "second"])
let AluminumAlloying300 = new AdvSimRecipe([["IronIngot", 4],["AluminiumIngot",2],["Steam300c",200]], [["MoltenFerroaluminiumAlloy", 2]], 20, "second", [150, "kMF", 1, "second"])
let AluminumAlloying400 = new AdvSimRecipe([["IronIngot", 4],["AluminiumIngot",2],["Steam400c",200]], [["MoltenFerroaluminiumAlloy", 2]], 10, "second", [150, "kMF", 1, "second"])

let PurpleGoldAlloying100 = new AdvSimRecipe([["GoldIngot", 1],["AluminiumIngot",2],["Steam100c",200]], [["MoltenPurpleGold", 2]], 40, "second", [150, "kMF", 1, "second"])
let PurpleGoldAlloying120 = new AdvSimRecipe([["GoldIngot", 1],["AluminiumIngot",2],["Steam120c",200]], [["MoltenPurpleGold", 2]], 38, "second", [150, "kMF", 1, "second"])
let PurpleGoldAlloying150 = new AdvSimRecipe([["GoldIngot", 1],["AluminiumIngot",2],["Steam150c",200]], [["MoltenPurpleGold", 2]], 35, "second", [150, "kMF", 1, "second"])
let PurpleGoldAlloying240 = new AdvSimRecipe([["GoldIngot", 1],["AluminiumIngot",2],["Steam240c",200]], [["MoltenPurpleGold", 2]], 26, "second", [150, "kMF", 1, "second"])
let PurpleGoldAlloying300 = new AdvSimRecipe([["GoldIngot", 1],["AluminiumIngot",2],["Steam300c",200]], [["MoltenPurpleGold", 2]], 20, "second", [150, "kMF", 1, "second"])
let PurpleGoldAlloying400 = new AdvSimRecipe([["GoldIngot", 1],["AluminiumIngot",2],["Steam400c",200]], [["MoltenPurpleGold", 2]], 10, "second", [150, "kMF", 1, "second"])
    
let Alloyer = new AbstractMachine(999999, 6, 10, [7, "MMF"], [324, "PP/H"])
    
export let Aluminum100AlloyerSim = new RecipeSimulator(Alloyer, AluminumAlloying100)
export let Aluminum120AlloyerSim = new RecipeSimulator(Alloyer, AluminumAlloying120)
export let Aluminum150AlloyerSim = new RecipeSimulator(Alloyer, AluminumAlloying150)
export let Aluminum240AlloyerSim = new RecipeSimulator(Alloyer, AluminumAlloying240)
export let Aluminum300AlloyerSim = new RecipeSimulator(Alloyer, AluminumAlloying300)
export let Aluminum400AlloyerSim = new RecipeSimulator(Alloyer, AluminumAlloying400)

export let Gold100AlloyerSim = new RecipeSimulator(Alloyer, PurpleGoldAlloying100)
export let Gold120AlloyerSim = new RecipeSimulator(Alloyer, PurpleGoldAlloying120)
export let Gold150AlloyerSim = new RecipeSimulator(Alloyer, PurpleGoldAlloying150)
export let Gold240AlloyerSim = new RecipeSimulator(Alloyer, PurpleGoldAlloying240)
export let Gold300AlloyerSim = new RecipeSimulator(Alloyer, PurpleGoldAlloying300)
export let Gold400AlloyerSim = new RecipeSimulator(Alloyer, PurpleGoldAlloying400)
