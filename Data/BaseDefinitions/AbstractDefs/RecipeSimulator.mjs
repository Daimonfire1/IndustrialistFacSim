

export class RecipeSimulator{
    constructor(MachineDef, RecipeDef){
        this.MachineDef = MachineDef
        this.RecipeDef = RecipeDef
    }

    getMachineDef(){
        return this.MachineDef
    }
	setMachineDef(MachineDef){
        this.MachineDef = MachineDef
    }

    getRecipeDef(){
        return this.RecipeDef
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
}