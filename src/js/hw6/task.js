export const diff = (a, b) => {
return Math.abs(a - b);
}

export const isWord = (str) => {
    if (typeof str !== 'string') {
        return false;
    }
    const trimmed = str.trim();
    if (trimmed === '') {
        return false;
    } 
    return !/\s/.test(trimmed);
}

export const pow = (a, x) => {
    return Math.pow(a, x);
}