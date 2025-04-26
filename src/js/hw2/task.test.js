import { outputMaxValue, getMonthName, areaCalc } from "./task";

describe("Проверка 1 задания", () => {
    it("Выводим максимальное значение с положительными числами", () => {
        expect(outputMaxValue(5, 10)).toBe(10);
    })

    it("Выводим максимальное значение с отрицательными числами", () => {
        expect(outputMaxValue(-5, -10)).toBe(-5);
    })

    it("Выводим максимальное значение с отрицательным и положительным числами", () => {
        expect(outputMaxValue(1, -100)).toBe(1);
    })

    it("Выводим максимальное значение с одинаковыми числами", () => {
        expect(outputMaxValue(1, 1)).toBe(1);
    })

    it("Выводим максимальное значение с одним положительным и одним нулевым числом", () => {
        expect(outputMaxValue(1, 0)).toBe(1);
    })

    it("Выводим максимальное значение с одним отрицательным и одним нулевым числом", () => {
        expect(outputMaxValue(-1, 0)).toBe(0);
    })

    it("Результат функции - число", () => {
        expect(typeof(outputMaxValue(1, 0))).toBe("number");
    })
})

describe("Проверка 2 задания", () => {
    it("пробуем получить месяц по его номеру", () => {
        global.prompt = jest.fn().mockReturnValueOnce('1');
        expect(getMonthName()).toBe('январь');
    })

    it("пробуем получить месяц по его номеру", () => {
        global.prompt = jest.fn().mockReturnValueOnce('6');
        expect(getMonthName()).toBe('июнь');
    })

    it("Если введено число равно 0", () => {
        global.prompt = jest.fn().mockReturnValueOnce('0');
        expect(() => getMonthName()).toThrow("Ввод не проходит условия задачи!");
    })

    it("Если введенное число меньше 0", () => {
        global.prompt = jest.fn().mockReturnValueOnce('-5');
        expect(() => getMonthName()).toThrow("Ввод не проходит условия задачи!");
    })

    it("Если введено не число", () => {
        global.prompt = jest.fn().mockReturnValueOnce('test');
        expect(() => getMonthName()).toThrow("Ввод не проходит условия задачи!");
    })
})

describe('Проверка 3 задания', () => {
    it('Круг помещается в квадрат', () => {
      expect(areaCalc(78.5398, 100)).toBe(true);
      expect(areaCalc(12.5664, 16)).toBe(true);
      expect(areaCalc(50.2655, 64)).toBe(true);
    });
  
    it('Круг НЕ помещается в квадрат', () => {
      expect(areaCalc(50, 49)).toBe(false);
      expect(areaCalc(314.159, 100)).toBe(false);
    });
  
    it('Пограничные значения', () => {
      expect(areaCalc(0, 0)).toBe(true);
      expect(areaCalc(25, 25)).toBe(false);
      expect(areaCalc(78.5398, 100)).toBe(true);
    });
  
    it('Обработка некорректных данных', () => {
      expect(() => areaCalc(-10, 100)).toThrow(RangeError);
      expect(() => areaCalc(50, -5)).toThrow(RangeError);
      expect(() => areaCalc("abc", 100)).toThrow(TypeError);
    });
});