/**
 * TODO:
 * TODO 주석을 읽고 지시에 따라 함수를 완성하세요.
 */

export function funcDeclaration() {
  // TODO: 문자열 'funcDeclaration'을 리턴하세요
}

export const funcExpression = function () {
  // TODO: 문자열 'funcExpression'을 리턴하세요
};

export const arrowFunc = () => {
  // TODO: 문자열 'arrowFunc'을 리턴하세요
};

/**
 * 두 숫자의 합을 반환합니다.
 *
 * @param {number} a - 첫 번째 숫자
 * @param {number} b - 두 번째 숫자
 * @returns {number} 두 숫자의 합
 */
export function sum(a, b) {
  // TODO: 위 jsdoc 설명에 맞게 함수를 완성하세요.
}

/**
 * 첫 번째 숫자에서 두 번째 숫자를 뺀 값을 반환합니다.
 *
 * @param {number} a - 첫 번째 숫자
 * @param {number} b - 두 번째 숫자
 * @returns {number} 두 숫자의 차
 */
export function subtract(a, b) {
  // TODO: 위 jsdoc 설명에 맞게 함수를 완성하세요.
}

/**
 * 첫 번째 숫자를 두 번째 숫자로 나눈 값을 반환합니다.
 *
 * @param {number} a - 첫 번째 숫자
 * @param {number} b - 두 번째 숫자
 * @returns {number} 두 숫자의 나눗셈 결과
 * @throws {Error} 0으로 나누는 경우 에러를 발생시킵니다.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없습니다.");
  }
  // TODO: 위 jsdoc 설명에 맞게 함수를 완성하세요.
}

/**
 * 두 숫자의 곱을 반환합니다.
 *
 * @param {number} a - 첫 번째 숫자
 * @param {number} b - 두 번째 숫자
 * @returns {number} 두 숫자의 곱
 */
export function multiply(a, b) {
  // TODO: 위 jsdoc 설명에 맞게 함수를 완성하세요.
}

/**
 * 두 값이 같은지 확인하는 함수
 *
 * @param {*} value1 첫 번째 값
 * @param {*} value2 두 번째 값
 * @returns {boolean} 두 값이 같으면 true, 그렇지 않으면 false
 */
export function isEqual(value1, value2) {
  // TODO: 위 jsdoc 설명에 맞게 함수를 완성하세요.
}

/**
 * 첫 번째 값이 두 번째 값보다 큰지 확인하는 함수
 *
 * @param {*} value1 첫 번째 값
 * @param {*} value2 두 번째 값
 * @returns {boolean} 첫 번째 값이 두 번째 값보다 크면 true, 그렇지 않으면 false
 */
export function isBiggerThan(value1, value2) {
  // TODO: 위 jsdoc 설명에 맞게 함수를 완성하세요.
}

/**
 * 첫 번째 값이 두 번째 값보다 작은지 확인하는 함수
 *
 * @param {*} value1 첫 번째 값
 * @param {*} value2 두 번째 값
 * @returns {boolean} 첫 번째 값이 두 번째 값보다 작으면 true, 그렇지 않으면 false
 */
export function isSmallerThan(value1, value2) {
  // TODO: 위 jsdoc 설명에 맞게 함수를 완성하세요.
}
