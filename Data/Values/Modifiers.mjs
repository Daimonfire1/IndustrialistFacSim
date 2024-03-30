export {TimeUnits, MFUnits, MetricUnits, PollutionUnits}

let TimeUnits={
	tick:0.5,
    second:1,
    minute:60,
    hour:3600,
    day:86400
}

let MetricUnits={
    nano:1/1000^3,
    mikro:1/1000^2,
    milli:1/1000,
    norm:1,
    kilo:1000,
    mega:1000^2,
    giga:1000^3,
    terra:1000^4,
    peta:1000^5,
    exa:1000^6
}

let MFUnits={
    nMF:nano, 
    hMF:mikro, 
    mMF:milli,
    MF:norm, 
    kMF:kilo,
    MMF:mega, 
    GMF:giga, 
    TMF:terra, 
    PMF:peta, 
    EMF:exa
}

let PollutionUnits={
    "P%/H":1, 
    "PP/H":1000
}