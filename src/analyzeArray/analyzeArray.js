export function analyzeArray(array) {
  let average = 0;
  let sum = 0;
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
  }
  average = sum / array.length;
  return { 'average': average, 'min': min, 'max': max, 'length': array.length };
}

