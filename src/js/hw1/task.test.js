import {sum, mult, sumSymbols, sumNums} from './task';

describe('Проверка 1-го задания', () => {
    it('Проверка что получаем в результате число (положительные числа)', () => {
        const res = typeof sum(2, 5);
        expect(res).toBe("number");
    })

    it('Проверка что получаем в результате число (отрицательные числа)', () => {
        const res = typeof sum(-5, -12);
        expect(res).toBe("number");
    })

    it('Проверка суммы двух положительных чисел', () => {
        const res = sum(2, 3);

        expect(res).toBe(5);
    })
    
    it('Проверка произведения 2 положительных чисел', () => {
        const res = mult(4, 3);
        expect(res).toBe(12);
    })

    it('Проверка суммы 2 отрицательных чисел', () => {
        const res = sum(-3, -2);
        expect(res).toBe(-5);
    })
    
    it('Проверка произведения 2 отрицательных чисел', () => {
        const res = mult(-6, -5);
        expect(res).toBe(30);
    })
})
describe('Проверка 2-го задания', () => {
    it('Проверка что мы получаем число', () => {
        const res = typeof sumSymbols('test', 'qwerty');
        expect(res).toBe("number");
    })

    it('Проверка суммы двух строк', () => {
        const res = sumSymbols('test', 'qwerty');
        expect(res).toBe(10);
    })
})

describe('Проверка 3-го задания', () => {
    it("Проверка что функция выполняется правильно", () => {
        global.prompt = jest.fn().mockReturnValueOnce("345");
        expect(sumNums("345")).toBe(12)
    })

    it("Строка из одного числа", () => {
        global.prompt = jest.fn().mockReturnValueOnce('1');
        expect(sumNums('1')).toBe(1)
    })

    it("Пустая строка", () => {
        global.prompt = jest.fn().mockReturnValueOnce('');
        expect(() => sumNums("")).toThrow("Не проходит по условию задачи!");
    })

    it("Больше 3-ёх чисел", () => {
        global.prompt = jest.fn().mockReturnValueOnce('123456');
        expect(() => sumNums("")).toThrow("Не проходит по условию задачи!");
    })

    it('Символы вместо цифр', () => {
        global.prompt = jest.fn().mockReturnValueOnce('1a2b');
        expect(() => sumNums("")).toThrow("Не проходит по условию задачи!");
    });

    it("Результат функции - не строка", () => {
        global.prompt = jest.fn().mockReturnValueOnce("345");
        expect(typeof sumNums("345")).not.toBe("string")
    })

    it("Результат функции - число", () => {
        global.prompt = jest.fn().mockReturnValueOnce("345");
        expect(typeof sumNums("345")).toBe("number")
    })

    it("Результат функции - не undefined", () => {
        global.prompt = jest.fn().mockReturnValueOnce("345");
        expect(sumNums("345")).not.toBeUndefined();
    })

    it("Результат функции - не null", () => {
        global.prompt = jest.fn().mockReturnValueOnce("345");
        expect(sumNums("345")).not.toBeNull();
    })
})