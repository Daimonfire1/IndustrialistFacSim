export function clamp(val, minval, maxval) {
    return Math.min(Math.max(val, minval), maxval);
}

export function stringsearch(array, searchterm, searchpos) {
    if(searchpos == undefined){
        searchpos = 0
    }
    return array.filter((el) =>el[searchpos].toString().toLowerCase().includes(searchterm.toLowerCase()))
}

export function verifyOptParam(Param, defaultvalue){
    if(Param==undefined){
        return defaultvalue
    }
    return Param
}

export function deepCopy(origobj){
    if(origobj instanceof Array){
        return Array.from(origobj)
    }
    return Object.assign(Object.create(Object.getPrototypeOf(origobj)), origobj)
}