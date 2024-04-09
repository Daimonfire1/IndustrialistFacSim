import { verifyOptParam } from "../../Util/UtilFunctions.mjs";
import { PollutionUnits } from "../../Values/Modifiers.mjs";


export class PollutionDef{
    constructor(Amount, Unit, Scale){
        this.Amount = Amount / PollutionUnits[Unit]
        this.Scale = verifyOptParam(Scale, 1)
    }

    getAmount(Unit){
        return this.Amount * PollutionUnits[Unit] * this.Scale
    }
    setAmount(Amount, Unit){
        this.Amount = Amount / PollutionUnits[Unit]
    }

    getScale(){
        return this.Scale
    }
    setScale(Scale){
        this.Scale = Scale
    }
}