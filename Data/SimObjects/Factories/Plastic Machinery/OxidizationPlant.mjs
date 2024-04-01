import { AbstractMachine } from "../../../BaseDefinitions/AbstractDefs/AbstractMachineDef.mjs";
import { RecipeSimulator } from "../../../BaseDefinitions/AbstractDefs/RecipeSimulator.mjs";
import { AdvSimRecipe } from "../../../BaseDefinitions/HandlerClasses/RecipeHandlers/AdvancedRecipeDef.mjs";
    
let EthanolOxidizing = new AdvSimRecipe([["Ethanol", 60]], [["AceticAcid", 60]], 20, "second", [500, "kMF", 1, "second"])
let EthyleneOxidizing = new AdvSimRecipe([["Ethylene", 24]], [["MEG", 18]], 20, "second", [500, "kMF", 1, "second"])
let HydrogenSulfideOxidizing = new AdvSimRecipe([["HydrogenSulfide", 24]], [["LiquidSulfur", 30]], 20, "second", [500, "kMF", 1, "second"])
let SulfurDioxideOxidizing = new AdvSimRecipe([["SulfurDioxide", 40]], [["SulfurTrioxide", 40]], 12, "second", [1, "MMF", 1, "second"])
    
let OxidizationPlant = new AbstractMachine(200000, 12, 16, [25, "MMF"], [0, "PP/H"])
    
export let EthanolOxidizationPlantSim = new RecipeSimulator(OxidizationPlant, EthanolOxidizing)
export let EthyleneOxidizationPlantSim = new RecipeSimulator(OxidizationPlant, EthyleneOxidizing)
export let HydrogenSulfideOxidizationPlantSim = new RecipeSimulator(OxidizationPlant, HydrogenSulfideOxidizing)
export let SulfurDioxideOxidizationPlantSim = new RecipeSimulator(OxidizationPlant, SulfurDioxideOxidizing)