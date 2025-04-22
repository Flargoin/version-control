import { isDate, isEmail, isPhoneNumber } from './task';
describe('Проверка регулярных выражений', () => {
  it('Проверка даты', () => {
    expect(isDate('2023-04-22')).toBe(true);
    expect(isDate('22.04.2023')).toBe(true);
    expect(isDate('2023/04/22')).toBe(false);
    expect(isDate('04-22-2023')).toBe(false);
  });

  it('Проверка email', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('invalid-email@')).toBe(false);
    expect(isEmail('user@.com')).toBe(false);
  });

  it('Проверка номера телефона', () => {
    expect(isPhoneNumber('+7 123 456-78-90')).toBe(true);
    expect(isPhoneNumber('8 (123) 456-78-90')).toBe(true);
    expect(isPhoneNumber('1234567890')).toBe(true);
    expect(isPhoneNumber('123-45-6789')).toBe(false);
  });
});