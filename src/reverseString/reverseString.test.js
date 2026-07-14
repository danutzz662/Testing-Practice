import { reverseString } from './reverseString';

test('reverses a string abc to cba', () => {
  expect(reverseString('abc')).toMatch('cba');
});
test('returns an empty string if the input is empty', () => {
  expect(reverseString('')).toMatch('');
});
test('returns an empty string if the input is not a string', () => {
  expect(reverseString([])).toMatch('');
  expect(reverseString({})).toMatch('');
  expect(reverseString(2)).toMatch('');
});

