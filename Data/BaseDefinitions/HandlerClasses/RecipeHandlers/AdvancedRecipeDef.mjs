import { deepCopy, verifyOptParam } from "../../../Util/UtilFunctions.mjs";
import { MamyFluxStream } from "../../PowerDefs/MamyFluxStream.mjs";
import { SimRecipe } from "./BasicRecipeDef.mjs";


export class AdvSimRecipe extends SimRecipe{
    constructor(InputItems, OutputItems, CycleTime, Unit, PowerDef, Scale){
        super(InputItems, OutputItems, CycleTime, Unit, Scale)
        if(PowerDef instanceof MamyFluxStream){
            this.PowerDef = deepCopy(PowerDef)
        }else if(PowerDef instanceof Array){
            if(PowerDef.length == 4){
                this.PowerDef = new MamyFluxStream(PowerDef[0], PowerDef[1], PowerDef[2], PowerDef[3])
            }else{
                throw new Error("Array of PowerDef does not have the right length (4)")
            }
        }else{
            throw new Error("PowerDef has invalid Args! Either provide a MFStream class or a 4-long Array")
        }
        this.Scale = verifyOptParam(Scale, 1)
    }


    setPowerDef(PowerDef){
        if(PowerDef instanceof MamyFluxStream){
            this.PowerDef = deepCopy(PowerDef)
        }else if(PowerDef instanceof Array){
            if(PowerDef.length == 4){
                this.PowerDef = new MamyFluxStream(PowerDef[0], PowerDef[1], PowerDef[2], PowerDef[3])
            }else{
                throw new Error("Array of PowerDef does not have the right length (4)")
            }
        }else{
            throw new Error("PowerDef has invalid Args! Either provide a MFStream class or a 4-long Array")
        }
    }
    getPowerDef(){
        return deepCopy(this.PowerDef)
    }

    setScale(Scale){
        super.setScale(Scale)
        this.PowerDef.setScale(Scale)
        this.Scale = Scale
    }

}