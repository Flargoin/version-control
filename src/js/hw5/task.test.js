import { array, sumArray, doubleArray, minMax } from './task';

describe('arrayTasks', () => {
  it('считает сумму элементов массива', () => {
    expect(sumArray(array)).toBe(45);
  });

  it('создаёт массив с элементами вдвое больше', () => {
    expect(doubleArray(array)).toEqual([6, 14, 2, 18, 8, 12, 4, 16, 10, 0]);
  });

  it('находит минимальный и максимальный элементы', () => {
    const { min, max } = minMax(array);
    expect(min).toBe(0);
    expect(max).toBe(9);
  });
});