import { IOStream } from "../ItemStreams/AdvItemStreams.mjs";

export class SimRecipe{
    constructor(InputItems, OutputItems, CycleTime, Unit){
        this.InputItems = Array.from(InputItems, (StreamValues) => 
            new IOStream(StreamValues[0],StreamValues[1],CycleTime,Unit));
        this.OutputItems = Array.from(OutputItems, (StreamValues) => 
            new IOStream(StreamValues[0],StreamValues[1],CycleTime,Unit));
    }

    getMoneyFlowIn(CycleTime, Unit){
        return this.InputItems.reduce((prevValue, currValue) => prevValue + currValue.getMoneyFlow(CycleTime,Unit), 0)
    }

    getMoneyFlowOut(CycleTime, Unit){
        return this.OutputItems.reduce((prevValue, currValue) => prevValue + currValue.getMoneyFlow(CycleTime, Unit), 0)
    }

    totalMoneyFlow(CycleTime, Unit){
        return this.getMoneyFlowOut(CycleTime, Unit)-this.getMoneyFlowIn(CycleTime, Unit)
    }

    getInputItems(ItemDef){
        if(ItemDef !== undefined){
            for (const InStream of this.InputItems) {
                if (InStream.getItemDef == ItemDef) {
                    return InStream
                }
            }
            return false
        }else{
            return this.InputItems
        }
    }

    getOutputItems(ItemDef){
        if(ItemDef !== undefined){
            for (const OutStream of this.OutputItems) {
                if (OutStream.getItemDef == ItemDef) {
                    return OutStream
                }
            }
            return false
        }else{
            return this.OutputItems
        }
    }

    setInputItems(InputItems, CycleTime, Unit){
        this.InputItems = Array.from(InputItems, (StreamValues) => 
            new IOStream(StreamValues[0],StreamValues[1],CycleTime,Unit));
    }

    setOutputItems(OutputItems, CycleTime, Unit){
        this.OutputItems = Array.from(OutputItems, (StreamValues) => 
            new IOStream(StreamValues[0],StreamValues[1],CycleTime,Unit));
    }

    updateItems(InputItems, OutputItems, CycleTime, Unit){
        this.setInputItems(InputItems, CycleTime, Unit)
        this.setOutputItems(OutputItems, CycleTime, Unit)
    }
    
}