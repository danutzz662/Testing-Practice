export function reverseString(input) {
  if (!input || typeof input !== 'string' || input === '') return '';
  return input.split('').reverse().join('');
}

