

export class RecipeSimulator{
    constructor(MachineDef, RecipeDef, ScaleFactor){
        this.MachineDef = MachineDef
        this.RecipeDef = RecipeDef
        if(ScaleFactor==undefined){
            ScaleFactor = 1
        }
        this.ScaleFactor = ScaleFactor
    }

    getMachineDef(){
        return this.MachineDef
    }
	setMachineDef(MachineDef){
        this.MachineDef = MachineDef
    }

    getRecipeDef(){
        if(this.ScaleFactor == 1){
			return this.RecipeDef
        }
        
    }
    setRecipeDef(RecipeDef){
        this.RecipeDef = RecipeDef
    }

    hasItemImport(ItemDef){
        return this.RecipeDef.getInputItems(ItemDef)
    }
    hasItemExport(ItemDef){
        return this.RecipeDef.getOutputItems(ItemDef)
    }

    getScale(){
        return this.ScaleFactor
    }
    setScale(Scale){
        this.ScaleFactor = Scale
    }
}