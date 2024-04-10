import { deepCopy } from "../../Util/UtilFunctions.mjs"


export class RecipeSimulator{
    constructor(MachineDef, RecipeDef, ScaleFactor){
        this.MachineDef = deepCopy(MachineDef)
        this.RecipeDef = deepCopy(RecipeDef)
        if(ScaleFactor==undefined){
            ScaleFactor = 1
        }
        this.ScaleFactor = ScaleFactor
    }

    getMachineDef(){
        return deepCopy(this.MachineDef)
    }
	setMachineDef(MachineDef){
        this.MachineDef = deepCopy(MachineDef)
    }

    getRecipeDef(){
        //if(this.ScaleFactor == 1){
			return deepCopy(this.RecipeDef)
        //}
        
    }
    setRecipeDef(RecipeDef){
        this.RecipeDef = deepCopy(RecipeDef)
    }

    hasItemImport(ItemDef){
        return deepCopy(this.RecipeDef.getInputItems(ItemDef))
    }
    hasItemExport(ItemDef){
        return deepCopy(this.RecipeDef.getOutputItems(ItemDef))
    }

    getScale(){
        return this.ScaleFactor
    }
    setScale(Scale){
        this.RecipeDef.setScale(Scale)
        this.ScaleFactor = Scale
    }
}