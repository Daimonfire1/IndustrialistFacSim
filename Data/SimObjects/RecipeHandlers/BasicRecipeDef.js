import { IOStream } from "../ItemStreams/AdvItemStreams";

export class SimRecipe{
    constructor(InputItems, OutputItems, CycleTime, Unit){
        this.InputItems = Array.from(InputItems, (StreamValues) => 
            new IOStream(StreamValues[1],StreamValues[2],CycleTime,Unit));
        this.OutputItems = Array.from(OutputItems, (StreamValues) => 
            new IOStream(StreamValues[1],StreamValues[2],CycleTime,Unit));
    }

    
}