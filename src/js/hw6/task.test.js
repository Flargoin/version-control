import { diff, isWord, pow } from './task';

describe('diff', () => {
  it('возвращает разницу между двумя числами', () => {
    expect(diff(10, 5)).toBe(5);
    expect(diff(5, 10)).toBe(5);
    expect(diff(-3, 3)).toBe(6);
    expect(diff(0, 0)).toBe(0);
  });
});

describe('isWord', () => {
  it('возвращает true для одной слова', () => {
    expect(isWord('hello')).toBe(true);
    expect(isWord('world')).toBe(true);
    expect(isWord('привет')).toBe(true);
  });

  it('возвращает false для нескольких слов или пустой строки', () => {
    expect(isWord('hello world')).toBe(false);
    expect(isWord('  hello  world  ')).toBe(false);
    expect(isWord('')).toBe(false);
    expect(isWord('   ')).toBe(false);
  });

  it('возвращает false для нестроковых значений', () => {
    expect(isWord(null)).toBe(false);
    expect(isWord(undefined)).toBe(false);
    expect(isWord(123)).toBe(false);
  });
});

describe('pow', () => {
  it('возводит число в степень', () => {
    expect(pow(2, 3)).toBe(8);
    expect(pow(5, 0)).toBe(1);
    expect(pow(4, 1)).toBe(4);
    expect(pow(3, 4)).toBe(81);
  });
});