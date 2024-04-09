import { MFConvert } from "../../Util/UnitConverters.mjs";
import { verifyOptParam } from "../../Util/UtilFunctions.mjs";
import { TimeUnits } from "../../Values/Modifiers.mjs";
import { MamyFlux } from "./MamyFlux.mjs";


export class MamyFluxStream extends MamyFlux{
    constructor(Amount, Unit, CycleTime, TUnit, Scale){
        super(Amount, Unit, Scale)
        this.Flow = Amount / (CycleTime * TimeUnits[TUnit])
        this.Unit = Unit
        this.Scale = verifyOptParam(Scale, 1)
    }

    #TimePerUnit(CycleTime, TUnit){
        return CycleTime * TimeUnits[TUnit]
    }

    #UpdateFlow(Amount, CycleTime, TUnit){
        this.Flow = Amount * this.#TimePerUnit(CycleTime, TUnit)
    }

    getPowerFlow(Unit, CycleTime, TUnit){
        return MFConvert(this.Flow * this.#TimePerUnit(CycleTime, TUnit) * this.Scale, this.Unit, Unit)
    }

    updateInternals(Amount, Unit, CycleTime, TUnit){
        this.setAmount(Amount, Unit)
        this.#UpdateFlow(Amount, CycleTime, TUnit)
    }
}