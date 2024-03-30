import { MFConvert, metricconvert } from "../../Util/UnitConverters.mjs";


export class MamyFlux{
    constructor(Amount, Unit){
        this.Amount = Amount //MFConvert(Amount, Unit, "MF")
        this.Unit = Unit
    }

    setAmount(Var1, PotV2){
		if(Var1 instanceof MamyFlux){
            PotV2 = Var1.getOrigUnit()
            Var1 = Var1.getAmount(PotV2)
        }
        this.Amount = Var1
        this.Unit = PotV2
    }

    getAmount(PotV1){
        if(PotV1 !== undefined){
            return MFConvert(this.Amount, this.Unit, PotV1)
        }else{
			return new MamyFlux(this.Amount, this.Unit)
        }
    }
}