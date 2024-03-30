import { TimeUnits } from "../../Values/Modifiers.mjs";
import { Item } from "./Item.mjs";

export class IOStream extends Item
{
    constructor(ItemDef, Amount, CycleTime, Unit){
        super(ItemDef, Amount)
        this.Flow = Amount / (CycleTime * TimeUnits[Unit])
    }

    #TimePerUnit(CycleTime, Unit){
        return CycleTime * TimeUnits[Unit]
    }

    #UpdateFlow(Amount, CycleTime, Unit){
        this.Flow = Amount * this.#TimePerUnit(CycleTime, Unit)
    }

    getItemFlow(CycleTime, Unit){
        return this.Flow * this.#TimePerUnit(CycleTime, Unit)
    }

    getMoneyFlow(CycleTime, Unit){
        return this.getItemFlow(CycleTime, Unit) * this.Value
    }

    updateInternals(ItemDef, Amount, CycleTime, Unit){
        super.setnewitem(ItemDef)
        super.setnewamount(Amount)
        this.#UpdateFlow(Amount, CycleTime, Unit)
    }
}