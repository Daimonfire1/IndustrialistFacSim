import { verifyOptParam } from "../../../Util/UtilFunctions.mjs";
import { ResourcePrices } from "../../../Values/ResourcePrices.mjs";

export class Item
{
    constructor(ItemDef, Amount, Scale){
        this.Scale = verifyOptParam(Scale, 1)
        this.ItemDef = ItemDef;
        this.Amount = Amount
        this.Value = ResourcePrices[ItemDef];
    }

    getItemDef(){
    	return this.ItemDef;
    }

    getAmount(){
        return this.Amount * this.Scale;
    }

    getValue(){
        return this.Value * this.getAmount();
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

    getScale(){
        return this.Scale
    }
    setScale(Scale){
        this.Scale = Scale
    }
}
