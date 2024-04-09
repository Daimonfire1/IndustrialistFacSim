import { MamyFluxStream } from "../../PowerDefs/MamyFluxStream.mjs";
import { SimRecipe } from "./BasicRecipeDef.mjs";


export class AdvSimRecipe extends SimRecipe{
    constructor(InputItems, OutputItems, CycleTime, Unit, PowerDef, ScaleFactor){
        super(InputItems, OutputItems, CycleTime, Unit, ScaleFactor)
        if(PowerDef instanceof MamyFluxStream){
            this.PowerDef = PowerDef
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


    setPowerDef(PowerDef){
        if(PowerDef instanceof MamyFluxStream){
            this.PowerDef = PowerDef
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
        return this.PowerDef
    }

}