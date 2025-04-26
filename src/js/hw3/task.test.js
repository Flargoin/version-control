import { numbersLoop, multySeven, averageOdd, run } from "./task";

describe("Проверяем 1 задание", () => {
    it('вывод чисел от 50 до 100', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
        numbersLoop();
        expect(spy).toHaveBeenCalledTimes(51);
        expect(spy).toHaveBeenNthCalledWith(1, 50);
        expect(spy).toHaveBeenNthCalledWith(51, 100);

        spy.mockRestore();
    })
})

describe('Проверяем 2 задание', () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation(() => {});
    });
  
    afterEach(() => {
      console.log.mockRestore();
    });
  
    it('вызывает console.log 10 раз с правильными значениями', () => {
      multySeven();
  
      expect(console.log).toHaveBeenCalledTimes(10);
  
      for (let i = 1; i <= 10; i++) {
        expect(console.log).toHaveBeenNthCalledWith(i, 7 * i);
      }
    });
});

describe('Проверяем 3 задание функцию averageOdd', () => {
  it('корректно считает среднее арифметическое нечётных чисел', () => {
    expect(averageOdd(1)).toBe(1);
    expect(averageOdd(2)).toBe(1);
    expect(averageOdd(3)).toBe(2);
    expect(averageOdd(10)).toBe(5);
  });

  it('выбрасывает ошибку при некорректном вводе', () => {
    expect(() => averageOdd(0)).toThrow('N должно быть числом больше или равно 1');
    expect(() => averageOdd(-5)).toThrow('N должно быть числом больше или равно 1');
    expect(() => averageOdd('abc')).toThrow('N должно быть числом больше или равно 1');
  });
});

describe('Проверяем 3 задание функцию run', () => {
  beforeAll(() => {
    global.prompt = jest.fn();
  });

  afterAll(() => {
    delete global.prompt;
  });

  it('выбрасывает ошибку при некорректном вводе', () => {
    global.prompt.mockReturnValue('abc');
    expect(() => run()).toThrow('Введите корректное число больше или равно 1');
  });

  it('возвращает правильное среднее для N=5', () => {
    global.prompt.mockReturnValue('5');
    expect(run()).toBe(3);
  });
});