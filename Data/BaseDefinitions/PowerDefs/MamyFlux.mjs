import { MFConvert } from "../../Util/UnitConverters.mjs";
import { verifyOptParam } from "../../Util/UtilFunctions.mjs";


export class MamyFlux{
    constructor(Amount, Unit, Scale){
        this.Amount = Amount //MFConvert(Amount, Unit, "MF")
        this.Unit = Unit
        this.Scale = verifyOptParam(Scale, 1)
    }

    setAmount(Var1, PotV2){
		if(Var1 instanceof MamyFlux){
            PotV2 = Var1.getUnit()
            Var1 = Var1.getAmount(PotV2)
        }
        this.Amount = Var1
        this.Unit = PotV2
    }

    getAmount(PotV1){
        if(PotV1 !== undefined){
            return MFConvert(this.Amount * this.Scale, this.Unit, PotV1)
        }else{
			return new MamyFlux(this.Amount, this.Unit, this.Scale)
        }
    }

    getUnit(){
        return this.Unit
    }

    getScale(){
        return this.Scale
    }
    setScale(Scale){
        this.Scale = Scale
    }

}