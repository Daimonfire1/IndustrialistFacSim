

export class AbstractMachine{
    constructor(Cost, Width, Length, PowerCapacity, PollutionDef){
        this.Cost = Cost
        this.Width = Width
        this.Length = Length
        this.Surface = Width * Length
        this.PowerCapacity = PowerCapacity
        this.PollutionDef = PollutionDef
    }

    getCost(){
        return this.Cost
    }
    //getWidth
}