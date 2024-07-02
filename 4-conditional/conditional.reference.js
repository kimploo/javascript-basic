/**
 * 주어진 연산자를 사용하여 두 숫자의 계산을 수행하는 함수입니다.
 *
 * @param {number} num1 - 첫 번째 숫자
 * @param {number} num2 - 두 번째 숫자
 * @param {string} operator - 수행할 연산을 나타내는 문자열 ('+', '-', '*', '/')
 * @returns {number} 연산 결과
 */
export function miniCalculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}

/**
 * 주어진 숫자가 3의 배수, 5의 배수, 또는 둘 다인지에 따라
 * 'Fizz', 'Buzz', 'FizzBuzz', 또는 'No FizzBuzz'를 반환하는 함수입니다.
 *
 * @param {number} num - 확인할 숫자
 * @returns {string} 'FizzBuzz' (3과 5의 배수인 경우), 'Fizz' (3의 배수인 경우), 'Buzz' (5의 배수인 경우), 'No FizzBuzz' (어느 경우에도 해당되지 않는 경우)
 */
export function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return "No FizzBuzz";
  }
}

/**
 * 주어진 값이 'Falsy'한 값인지 확인하는 함수입니다.
 * 'Falsy'한 값은 false, undefined, 0, NaN, 또는 빈 문자열('')을 포함합니다.
 *
 * @param {*} anything - 확인할 값
 * @returns {boolean} 주어진 값이 'Falsy'한 값이면 true, 그렇지 않으면 false
 */
export function isFalsy(anything) {
  if (
    anything === false ||
    anything === undefined ||
    anything === 0 ||
    Number.isNaN(anything) ||
    anything === ""
  ) {
    return true;
  } else {
    return false;
  }
}

function isFalsy2(anything) {
  return !anything;
}
