import { SimRecipe } from "../Data/SimObjects/RecipeHandlers/BasicRecipeDef.mjs";

const bababoe = new SimRecipe([],[["PurpleGoldIngot",400]], 4800, "second");
console.log(bababoe.totalMoneyFlow(1,'day'))