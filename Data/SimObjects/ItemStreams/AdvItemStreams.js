import { ItemStream } from "./ItemStream";
import { TimeUnit } from "../Values/Modifiers";

export class IOStream extends ItemStream{
    constructor(ItemDef, Amount, CycleTime, Unit){
        this.Flow = Amount / (CycleTime * TimeUnit[Unit])
        super(ItemDef, this.Flow)
        this.CycleTime = CycleTime
    }

    get ItemFlow(Unit){
        return this.Flow * TimeUnit[Unit]
    }

    get MoneyFlow(Unit){
        return this.ItemFlow(Unit) * this.Value()
    }
}