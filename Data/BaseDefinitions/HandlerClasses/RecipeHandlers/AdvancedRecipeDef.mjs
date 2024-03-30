import { SimRecipe } from "./BasicRecipeDef.mjs";


export class AdvSimRecipe extends SimRecipe{
    constructor(InputItems, OutputItems, CycleTime, Unit, PowerDef, PollutionDef){
        super(InputItems, OutputItems, CycleTime, Unit)
    }
}