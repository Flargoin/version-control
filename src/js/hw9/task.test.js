import { isRightTriangle, circleMetrics, quadraticRoots } from './task';

describe('isRightTriangle', () => {
  it('Определяет прямоугольный треугольник', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
    expect(isRightTriangle(5, 3, 4)).toBe(true);
    expect(isRightTriangle(1, 1, Math.sqrt(2))).toBe(true);
  });

  it('Определяет, что треугольник не прямоугольный', () => {
    expect(isRightTriangle(3, 3, 3)).toBe(false);
    expect(isRightTriangle(0, 4, 5)).toBe(false);
    expect(isRightTriangle(-3, 4, 5)).toBe(false);
  });
});

describe('circleMetrics', () => {
  it('Вычисляет длину окружности и площадь круга', () => {
    const { circumference, area } = circleMetrics(1);
    expect(circumference).toBeCloseTo(2 * Math.PI);
    expect(area).toBeCloseTo(Math.PI);

    const res = circleMetrics(0);
    expect(res.circumference).toBe(0);
    expect(res.area).toBe(0);
  });

  it('Ошибка при отрицательном радиусе', () => {
    expect(() => circleMetrics(-1)).toThrow('Радиус не может быть отрицательным');
  });
});

describe('quadraticRoots', () => {
  it('Два корня', () => {
    expect(quadraticRoots(1, -3, 2)).toEqual([2, 1]);
  });

  it('Один корень', () => {
    expect(quadraticRoots(1, 2, 1)).toEqual([-1]);
  });

  it('Нет корней', () => {
    expect(quadraticRoots(1, 0, 1)).toBe('Корней нет');
  });

  it('Линейное уравнение', () => {
    expect(quadraticRoots(0, 2, -4)).toEqual([2]);
  });

  it('Бесконечное количество решений', () => {
    expect(quadraticRoots(0, 0, 0)).toBe('Бесконечное количество решений');
  });

  it('Нет решений (0x + c = 0, c!=0)', () => {
    expect(quadraticRoots(0, 0, 1)).toBe('Корней нет');
  });
});