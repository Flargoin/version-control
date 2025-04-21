export function diff(a, b) {
return Math.abs(a - b);
}

export function isWord(str) {
    if (typeof str !== 'string') {
        return false;
    }
    const trimmed = str.trim();
    if (trimmed === '') {
        return false;
    } 
    return !/\s/.test(trimmed);
}

export function pow(a, x) {
    return Math.pow(a, x);
}