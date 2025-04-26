/* #1 */
export const sum = (a, b) => a + b;
export const mult = (a, b) => a * b;

/* #2 */
export const sumSymbols = (a, b) => a.length + b.length;

/* #3 */
export const sumNums = () => {
    const input = prompt("Введите трёхзначное число", 1);
    if(isNaN(input) || !input || input.length > 3) {
        throw new Error("Не проходит по условию задачи!");
    }
    return input.split('').reduce((sum, num) => sum + +num, 0);
};