import { MFUnits, MetricUnits } from "../Values/Modifiers.mjs";

export { metricconvert, MFParse, MFConvert}

function metricconvert(ValIn, Unit, TargetUnit) {
    return ValIn*MetricUnits[Unit]/MetricUnits[TargetUnit]
}

function MFParse(UnitCode){
    if(MFUnits.includes(UnitCode)){
        return MFUnits[UnitCode]
    }else if(MetricUnits.includes(UnitCode)){
        return MFUnits.invert()[UnitCode]
    }else{
        throw new Error("InvalidUnitCode")
    }
}

function MFConvert(ValIn, Unit, TargetUnit){
    return metricconvert(ValIn, MFParse(Unit), MFParse(TargetUnit))
}