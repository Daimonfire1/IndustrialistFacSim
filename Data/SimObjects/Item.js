import ResourcePrices from "../Values/ResourcePrices.mjs"


export class Item
{
    constructor(ItemDef){
        this.ItemDef = ItemDef;
        this.Value = ResourcePrices.ItemDef;
    }

    get ItemDef(){
    	return this.ItemDef;
    }

    get Value(){
        return this.Value;
    }
}
