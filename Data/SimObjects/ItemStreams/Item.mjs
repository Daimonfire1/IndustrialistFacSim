import { ResourcePrices } from "../../Values/ResourcePrices.mjs";

export class Item
{
    constructor(ItemDef, Amount){
        this.ItemDef = ItemDef;
        this.Amount = Amount
        this.Value = ResourcePrices[ItemDef];
    }

    getItemDef(){
    	return this.ItemDef;
    }

    getAmount(){
        return this.Amount;
    }

    getValue(){
        return this.Value * this.Amount;
    }

    setnewitem(ItemDef){
        this.ItemDef = ItemDef;
        this.#updateValue();
    }

    setnewamount(Amount){
        this.Amount = Amount;
    }

    #updateValue(){
        this.Value = ResourcePrices[this.ItemDef];
    }
}
