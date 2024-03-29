import { Item } from "./Item";

export class ItemStream extends Item{
    constructor(ItemDef, ItemRate){
        super(ItemDef);
        this.ItemRate = ItemRate;
    }

    set ItemRate(ItemRate){
        this.ItemRate = ItemRate;
    }
	setItemRate(ItemRate){
        this.ItemRate = ItemRate;
    }
    
    get ItemRate(){
        return this.ItemRate;
    }
	getItemRate(){
        return this.ItemRate;
    }
}