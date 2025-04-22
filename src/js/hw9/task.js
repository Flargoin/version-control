export const isRightTriangle = (a, b, c) => {
    const sides = [a, b, c].sort((x, y) => x - y);
    if (sides.some(side => side <= 0)) return false;
    return Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2) < 1e-10;
};

export const circleMetrics = R => {
    if (R < 0) throw new Error('Радиус не может быть отрицательным');
    const circumference = 2 * Math.PI * R;
    const area = Math.PI * R ** 2;
    return { circumference, area };
};

export const quadraticRoots = (a, b, c) => {
    if (a === 0) {
      if (b === 0) {
        return c === 0 ? 'Бесконечное количество решений' : 'Корней нет';
      }
      return [-c / b];
    }
  
    const discriminant = b ** 2 - 4 * a * c;
  
    if (discriminant < 0) return 'Корней нет';
  
    if (discriminant === 0) {
      return [-b / (2 * a)];
    }
  
    const sqrtD = Math.sqrt(discriminant);
    return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
};