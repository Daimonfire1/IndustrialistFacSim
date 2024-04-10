import { Console } from "console"


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
        return this.RecipeDef
    }
    setRecipeDef(RecipeDef){
        this.RecipeDef = RecipeDef
    }

    hasItemImport(ItemDef){
        console.log(this.RecipeDef)
        return this.RecipeDef.getInputItems(ItemDef)
    }
    hasItemExport(ItemDef){
        console.log(this.RecipeDef)
        return this.RecipeDef.getOutputItems(ItemDef)
    }

    getScale(){
        return this.ScaleFactor
    }
    setScale(Scale){
        this.RecipeDef.setScale(Scale)
        this.ScaleFactor = Scale
    }
}