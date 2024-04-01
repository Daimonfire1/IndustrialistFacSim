import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";


let OilFrackingSulfur = new AdvSimRecipe([["Sand", 16],["SulfuricAcid", 7.5],["Water", 40],["Steam", 200]], [["FrackingOil", 100]], 8, "second", [62.5, "kMF", 1, "second"])
let OilFrackingAcetic = new AdvSimRecipe([["Sand", 16],["AceticAcid", 16],["Water", 40],["Steam", 200]], [["FrackingOil", 100]], 8, "second", [62.5, "kMF", 1, "second"])


let OilFrackingTower = new AbstractMachine(500000, 12, 12, [1, "MMF"], [432, "PP/H"]) //POLLUTION NOT CHECKED


export let OilFrackingSulfurSim = new RecipeSimulator(OilFrackingTower, OilFrackingSulfur)
export let OilFrackingAceticSim = new RecipeSimulator(OilFrackingTower, OilFrackingAcetic)