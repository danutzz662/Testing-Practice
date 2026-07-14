import { Calculator } from './calculator';
test('add 2 + 2', () => {
  expect(Calculator.add(2, 2)).toBe(4);
});
test('subtract 4 - 2', () => {
  expect(Calculator.subtract(4, 2)).toBe(2);
});
test('multiply 4 * 2', () => {
  expect(Calculator.multiply(4, 2)).toBe(8);
});

test('devide 4 / 2', () => {
  expect(Calculator.devide(4, 2)).toBe(2);
});
test('cant devide by 0', () => {
  expect(Calculator.devide(4, 0)).toBeUndefined();
});

