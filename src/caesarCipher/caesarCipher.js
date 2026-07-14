export function caesarCipher(input, shift) {
  if (
    !input ||
    typeof input !== 'string' ||
    input === '' ||
    typeof shift !== 'number'
  )
    return '';

  let cipher = '';

  for (let i = 0; i < input.length; i++) {
    let code = input.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      code = code + shift;
      if (code > 90) {
        code = code - 26;
      } else if (code < 65) {
        code = code + 26;
      }
    } else if (code >= 97 && code <= 122) {
      code = code + shift;
      if (code > 122) {
        code = code - 26;
      } else if (code < 97) {
        code = code + 26;
      }
    }
    cipher = cipher + String.fromCharCode(code);
  }

  return cipher;
}

