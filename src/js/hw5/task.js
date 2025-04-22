export const array = [3, 7, 1, 9, 4, 6, 2, 8, 5, 0];

export const sumArray = (arr) => {
  return arr.reduce((acc, val) => acc + val, 0);
}

export const doubleArray = (arr) => {
  return arr.map(val => val * 2);
}

export const minMax = (arr) => {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}