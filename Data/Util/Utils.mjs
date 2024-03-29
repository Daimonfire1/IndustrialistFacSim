export function clamp(val, minval, maxval) {
    return Math.min(Math.max(val, minval), maxval);
}