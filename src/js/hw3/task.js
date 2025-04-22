/* Task 1 */
export const numbersLoop = () => {
    for(let i = 50; i <= 100; i++){
        console.log(i);
    }
}

/* Task 2 */
export const multySeven = () => {
    for(let i = 1;i <= 10; i++) {
        console.log(7 * i);
    }
}

/* Task3 */
export const averageOdd = (n) => {
    if (typeof n !== 'number' || n < 1) {
      throw new Error('N должно быть числом больше или равно 1');
    }
  
    let sum = 0;
    let count = 0;
  
    for (let i = 1; i <= n; i += 2) {
      sum += i;
      count++;
    }
  
    return count === 0 ? 0 : sum / count;
}

export const run = () => {
    const input = prompt('Введите число N:');
    let n = input;
    if (isNaN(+n) || +n < 1) {
        throw new Error('Введите корректное число больше или равно 1');
    }

    return averageOdd(+n);
}