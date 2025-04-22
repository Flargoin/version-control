import { getWeekday, minutesSinceStartOfDay, getYoungerUser} from './task';

describe('getWeekday', () => {
  it('возвращает правильный день недели', () => {
    expect(getWeekday('01.01.2023')).toBe('Воскресенье');
    expect(getWeekday('15.08.2024')).toBe('Четверг'); 
    expect(getWeekday('31.12.2022')).toBe('Суббота');
  });

  it('выбрасывает ошибку при некорректной дате', () => {
    expect(() => getWeekday('32.01.2023')).toThrow('Некорректная дата');
    expect(() => getWeekday('abc')).toThrow('Некорректная дата');
  });
});

describe('minutesSinceStartOfDay', () => {
  it('возвращает число минут с начала дня', () => {
    const minutes = minutesSinceStartOfDay();
    expect(typeof minutes).toBe('number');
    expect(minutes).toBeGreaterThanOrEqual(0);
    expect(minutes).toBeLessThanOrEqual(24 * 60);
  });
});

describe('getYoungerUser', () => {
  it('определяет более молодого пользователя', () => {
    expect(getYoungerUser('01.01.2000', '01.01.1990')).toBe('Первый пользователь моложе');
    expect(getYoungerUser('15.05.1985', '20.10.1990')).toBe('Второй пользователь моложе');
    expect(getYoungerUser('10.10.1995', '10.10.1995')).toBe('Пользователи одного возраста');
  });

  it('выбрасывает ошибку при некорректных датах', () => {
    expect(() => getYoungerUser('32.01.2000', '01.01.2000')).toThrow('Некорректная дата');
    expect(() => getYoungerUser('01.01.2000', 'abc')).toThrow('Некорректная дата');
  });
});