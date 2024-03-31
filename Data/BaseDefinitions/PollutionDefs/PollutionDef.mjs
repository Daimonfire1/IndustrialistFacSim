import { PollutionUnits } from "../../Values/Modifiers.mjs";


export class PollutionDef{
    constructor(Amount, Unit){
        this.Amount = Amount / PollutionUnits[Unit]
    }

    getAmount(Unit){
        return this.Amount * PollutionUnits[Unit] 
    }
    setAmount(Amount, Unit){
        this.Amount = Amount / PollutionUnits[Unit]
    }
}