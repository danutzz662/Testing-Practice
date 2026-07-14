import { caesarCipher } from './caesarCipher';

test('wrapping from z to a', () => {
  expect(caesarCipher('xyz', 3)).toMatch('abc');
});
test('case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toMatch('KhOOr');
});
test('test punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
});

