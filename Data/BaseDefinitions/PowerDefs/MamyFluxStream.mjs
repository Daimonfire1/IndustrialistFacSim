import { MFConvert } from "../../Util/UnitConverters.mjs";
import { TimeUnits } from "../../Values/Modifiers.mjs";
import { MamyFlux } from "./MamyFlux.mjs";


export class MamyFluxStream extends MamyFlux{
    constructor(Amount, Unit, CycleTime, TUnit){
        super(Amount, Unit)
        this.Flow = Amount / (CycleTime * TimeUnits[TUnit])
        this.Unit = Unit
    }

    #TimePerUnit(CycleTime, TUnit){
        return CycleTime * TimeUnits[TUnit]
    }

    #UpdateFlow(Amount, CycleTime, TUnit){
        this.Flow = Amount * this.#TimePerUnit(CycleTime, TUnit)
    }

    getPowerFlow(Unit, CycleTime, TUnit){
        return MFConvert(this.Flow * this.#TimePerUnit(CycleTime, TUnit), this.Unit, Unit)
    }

    updateInternals(Amount, Unit, CycleTime, TUnit){
        this.setAmount(Amount, Unit)
        this.#UpdateFlow(Amount, CycleTime, TUnit)
    }
}