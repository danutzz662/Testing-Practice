import { capitalize } from './capitalize';

test('takes abc and returns Abc', () => {
  expect(capitalize('abcdsd')).toMatch('Abc');
});
test('returns an empty string if the input is empty', () => {
  expect(capitalize('')).toMatch('');
});
test('returns an empty string if the input is not a string', () => {
  expect(capitalize([])).toMatch('');
  expect(capitalize({})).toMatch('');
  expect(capitalize(2)).toMatch('');
});

