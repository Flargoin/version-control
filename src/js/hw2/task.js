export const outputMaxValue = (a, b) => {
    return a > b ? a : b;
}

export const getMonthName = () => {
    const input = prompt('Введите номер месяца', 1);
    let month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    if(isNaN(input) || input === '0' || +input > 12 || +input < 1){
        throw new Error("Ввод не проходит условия задачи!");
    }

    return month[input-1];
}

export const areaCalc = (circle, square) => {
    if (typeof circle !== 'number' || typeof square !== 'number') {
        throw new TypeError('Не числовое значение');
    }
      
    if (circle < 0 || square < 0) {
        throw new RangeError('Отрицательное значение');
    }

    const diameter = 2 * Math.sqrt(circle / Math.PI);
    const side = Math.sqrt(square);
    
    const EPSILON = 0.0001;
    return diameter <= side || Math.abs(diameter - side) < EPSILON;
}
