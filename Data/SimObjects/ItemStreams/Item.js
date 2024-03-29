import ResourcePrices from "../Values/ResourcePrices.mjs";

export class Item
{
    constructor(ItemDef, Amount){
        this.ItemDef = ItemDef;
        this.Amount = Amount
        this.Value = ResourcePrices.ItemDef;
    }

    get ItemDef(){
    	return this.ItemDef;
    }

    get Amount(){
        return this.Amount;
    }

    get Value(){
        return this.Value * this.Amount;
    }

    setnewitem(ItemDef){
        this.ItemDef = ItemDef;
        this.updateValue();
    }

    setnewamount(Amount){
        this.Amount = Amount;
    }

    static updateValue(){
        this.Value = ResourcePrices.ItemDef;
    }
}
