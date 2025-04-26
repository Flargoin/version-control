export const createUserWithAge = () => {
    const user = { name: 'John' };
    const input = prompt('Введите возраст:');
    const age = +input;
  
    if (isNaN(age) || age < 0) {
      throw new Error('Введите корректный возраст (неотрицательное число)');
    }
  
    user.age = age;
    const admin = { ...user, role: 'admin' };
    const { name, age: adminAge, role } = admin;
  
    return { user, admin, name, age: adminAge, role };
}