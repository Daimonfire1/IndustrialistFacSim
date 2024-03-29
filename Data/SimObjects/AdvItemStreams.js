import { ItemStream } from "./ItemStream";
import { TimeUnit } from "../Values/Modifiers";

export class InputStream extends ItemStream{
    constructor(ItemDef, Amount, CycleTime, Unit){
        this.Flow = Amount / (CycleTime * TimeUnit[Unit])
        super(ItemDef, this.Flow)
        this.CycleTime = CycleTime
    }

    get Flow(Unit){
        return this.Flow * TimeUnit[Unit]
    }
}