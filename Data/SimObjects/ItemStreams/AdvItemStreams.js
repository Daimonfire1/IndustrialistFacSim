import { TimeUnit } from "../Values/Modifiers";
import { Item } from "./Item";

export class IOStream extends Item
{
    constructor(ItemDef, Amount, CycleTime, Unit){
        super(ItemDef, Amount)
        this.Flow = Amount / (CycleTime * TimeUnit[Unit])
    }

    static TimePerUnit(CycleTime, Unit){
        return CycleTime * TimeUnit[Unit]
    }

    static UpdateFlow(Amount, CycleTime, Unit){
        this.Flow = Amount * this.TimePerUnit(CycleTime, Unit)
    }

    getItemFlow(){
        return this.Flow
    }
    getItemFlow(CycleTime, Unit){
        return this.Flow * TimePerUnit(CycleTime, Unit)
    }

    getMoneyFlow(){
        return this.getItemFlow() * this.Value
    }
    getMoneyFlow(CycleTime, Unit){
        return this.getItemFlow(CycleTime, Unit) * this.Value
    }

    updateInternals(ItemDef, Amount, CycleTime, Unit){
        super.setnewitem(ItemDef)
        super.setnewamount(Amount)
        this.UpdateFlow(Amount, CycleTime, Unit)
    }
}