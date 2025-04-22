
export const getWeekday = (dateStr) => {
    const [day, month, year] = dateStr.split('.').map(Number);
    const date = new Date(year, month - 1, day);
  
    if (
      isNaN(date.getTime()) ||
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      throw new Error('Некорректная дата');
    }
  
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
};

export const minutesSinceStartOfDay = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffMs = now - start;
    return Math.floor(diffMs / 60000); // миллисекунды в минуты
}

export const getYoungerUser = (dateStr1, dateStr2) => {
    const parseDate = (str) => {
      const [d, m, y] = str.split('.').map(Number);
      const date = new Date(y, m - 1, d);
      if (isNaN(date.getTime())) {
        throw new Error('Некорректная дата');
      }
      
      if (date.getDate() !== d || date.getMonth() !== m - 1 || date.getFullYear() !== y) {
        throw new Error('Некорректная дата');
      }
      return date;
    };
  
    const date1 = parseDate(dateStr1);
    const date2 = parseDate(dateStr2);
  
    if (date1.getTime() > date2.getTime()) return 'Первый пользователь моложе';
    if (date2.getTime() > date1.getTime()) return 'Второй пользователь моложе';
    return 'Пользователи одного возраста';
};