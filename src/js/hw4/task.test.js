import { createUserWithAge } from './task';

describe('createUserWithAge', () => {
  beforeAll(() => {
    global.prompt = jest.fn();
  });

  afterAll(() => {
    delete global.prompt;
  });

  it('корректно создаёт user и admin с введённым возрастом', () => {
    global.prompt.mockReturnValue('25');

    const { user, admin, name, age, role } = createUserWithAge();

    expect(user).toEqual({ name: 'John', age: 25 });
    expect(admin).toEqual({ name: 'John', age: 25, role: 'admin' });

    expect(name).toBe('John');
    expect(age).toBe(25);
    expect(role).toBe('admin');
  });

  it('выбрасывает ошибку при некорректном возрасте', () => {
    global.prompt.mockReturnValue('abc');
    expect(() => createUserWithAge()).toThrow('Введите корректный возраст (неотрицательное число)');

    global.prompt.mockReturnValue('-5');
    expect(() => createUserWithAge()).toThrow('Введите корректный возраст (неотрицательное число)');
  });
});