import { TimeUnit } from "../Values/Modifiers";
import { Item } from "./Item";

export class IOStream extends Item
{
    constructor(ItemDef, Amount, CycleTime, Unit){
        super(ItemDef, Amount)
        this.Flow = Amount / (CycleTime * TimeUnit[Unit])
        
        this.CycleTime = CycleTime
    }

    static getItemFlow(Unit){
        return this.Flow * TimeUnit[Unit]
    }

    static getMoneyFlow(Unit){
        return this.getItemFlow(Unit) * this.Value()
    }
}