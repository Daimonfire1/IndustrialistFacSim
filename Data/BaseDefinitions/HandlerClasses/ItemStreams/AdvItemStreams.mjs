import { verifyOptParam } from "../../../Util/UtilFunctions.mjs";
import { TimeUnits } from "../../../Values/Modifiers.mjs";
import { Item } from "./Item.mjs";

export class IOStream extends Item
{
    constructor(ItemDef, Amount, CycleTime, Unit, Scale){
        if(Amount instanceof String){
            let _temp = ItemDef
            ItemDef = Amount
            Amount = _temp
        }
        super(ItemDef, Amount, Scale)
        this.Scale = verifyOptParam(Scale, 1)
        this.Flow = Amount / (CycleTime * TimeUnits[Unit])
    }

    #TimePerUnit(CycleTime, Unit){
        return CycleTime * TimeUnits[Unit]
    }

    #UpdateFlow(Amount, CycleTime, Unit){
        this.Flow = Amount * this.#TimePerUnit(CycleTime, Unit)
    }

    getItemFlow(CycleTime, Unit){
        return this.Flow * this.#TimePerUnit(CycleTime, Unit) * this.Scale
    }

    getMoneyFlow(CycleTime, Unit){
        return this.getItemFlow(CycleTime, Unit) * this.Value
    }

    updateInternals(ItemDef, Amount, CycleTime, Unit){
        this.setnewitem(ItemDef)
        this.setnewamount(Amount)
        this.#UpdateFlow(Amount, CycleTime, Unit)
    }
}