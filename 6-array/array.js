/**
 * 주어진 값의 정확한 타입을 반환합니다.
 *
 * @param {*} value - 타입을 확인할 값.
 * @returns {string} - 'string', 'number', 'boolean', 'object', 'array', 'undefined', 'null', 'function'
 */

export function getCorrectType(value) {}

/**
 * CSV 문자열을 2차원 배열로 변환합니다.
 *
 * @param {string} csvString - 변환할 CSV 문자열입니다. (example.csv를 참고하세요.)
 * @returns {string[][]} 2차원 배열 형태의 CSV 데이터입니다.
 */
export function changeCSVto2DArray(csvString) {}

export function getAverageAge(csvString) {}

/**
 * CSV 문자열에서 'Alice'라는 이름을 가진 사람의 정보를 객체로 반환합니다.
 *
 * @param {string} csvString - CSV 형식의 문자열입니다. (example.csv를 참고하세요.)
 * @returns {Object|null} 'Alice'라는 이름을 가진 사람의 정보를 포함한 객체를 반환합니다. 찾을 수 없는 경우 null을 반환합니다.
 * @property {string} name - 이름
 * @property {string} age - 나이
 * @property {string} city - 도시
 * @property {string} occupation - 직업
 */
export function findAliceReturnObject(csvString) {}

/**
 * CSV 문자열에서 'Teacher' 직업을 가진 사람의 인덱스 목록을 반환합니다.
 *
 * @param {string} csvString - CSV 형식의 문자열입니다. (example.csv를 참고하세요.)
 * @returns {number[]} 'Teacher' 직업을 가진 사람들의 인덱스 배열을 반환합니다.
 */
export function findTeacherIndices(csvString) {}

/**
 * 빙고 보드에서 빙고가 있는지 확인하는 함수.
 *
 * @param {string[][]} board - 빙고 보드 배열.
 * @returns {boolean} - 빙고가 있으면 true, 없으면 false.
 */
export function bingo(board) {}

/**
 * 행을 검사하여 빙고가 있는지 확인하는 함수.
 *
 * @param {string[][]} board - 빙고 보드 배열.
 * @returns {boolean} - 행에 빙고가 있으면 true, 없으면 false.
 */
export function checkRows(board) {}

/**
 * 열을 검사하여 빙고가 있는지 확인하는 함수.
 *
 * @param {string[][]} board - 빙고 보드 배열.
 * @returns {boolean} - 열에 빙고가 있으면 true, 없으면 false.
 */
export function checkColumns(board) {}

/**
 * 대각선을 검사하여 빙고가 있는지 확인하는 함수.
 *
 * @param {string[][]} board - 빙고 보드 배열.
 * @returns {boolean} - 대각선에 빙고가 있으면 true, 없으면 false.
 */
export function checkDiagonals(board) {}

// 테스트용 빙고 보드
const bingoBoard = [
  ["✅", "❎", "❎"],
  ["✅", "❎", "❎"],
  ["✅", "❎", "❎"],
];

console.log(bingo(bingoBoard)); // true
