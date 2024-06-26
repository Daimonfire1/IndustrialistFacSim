import { deepCopy } from "../../Util/UtilFunctions.mjs"
import { MamyFlux } from "../PowerDefs/MamyFlux.mjs"


export class AbstractMachine{
    constructor(Name, Cost, Width, Length, PowerCapacity, PollutionDef){
        this.Name = Name
        this.Cost = Cost
        this.Width = Width
        this.Length = Length
        this.Surface = Width * Length
        if(PowerCapacity instanceof MamyFlux){
            this.PowerCapacity = deepCopy(PowerCapacity)
        }else if(PowerCapacity instanceof Array){
            if(PowerCapacity.length == 2){
                this.PowerCapacity = new MamyFlux(PowerCapacity[0], PowerCapacity[1])
            }else{
                throw new Error("Array of PowerCapacity does not have the right length (2)")
            }
        }else{
            throw new Error("PowerCapacity has invalid Args! Either provide a MamyFlux class or a 2-long Array")
        }
        this.PollutionDef = deepCopy(PollutionDef) 
    }

    #recalcSurface(){
        this.Surface = this.Width * this.Length
    }

    getName(){
        return this.Name
    }

    getCost(){
        return this.Cost
    }
    getSurface(){
        return this.Surface
    }
    setLength(stoods){
        this.Length = stoods
        this.#recalcSurface()
    }
    setWidth(stoods){
        this.Width = stoods
        this.#recalcSurface()
    }

    getPowerCapacity(Unit){
        return deepCopy(this.PowerCapacity.getAmount(Unit))
    }
    setPowerCapacity(PowerCapacity){
        if(PowerCapacity instanceof MamyFlux){
            this.PowerCapacity = deepCopy(PowerCapacity)
        }else if(PowerCapacity instanceof Array){
            if(PowerCapacity.length == 2){
                this.PowerCapacity = new MamyFlux(PowerCapacity[0], PowerCapacity[1])
            }else{
                throw new Error("Array of PowerCapacity does not have the right length (2)")
            }
        }else{
            throw new Error("PowerCapacity has invalid Args! Either provide a MFStream class or a 2-long Array")
        }
    }

    getPollutionDef(){
        return deepCopy(this.PollutionDef) 
    }
    setPollutionDef(PollutionDef){
        this.PollutionDef = deepCopy(PollutionDef)
    }
}