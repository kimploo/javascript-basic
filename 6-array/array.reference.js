import { readFileSync } from "fs";
import { resolve } from "path";

/**
 * 주어진 값의 정확한 타입을 반환합니다.
 *
 * @param {*} value - 타입을 확인할 값.
 * @returns {string} - 'string', 'number', 'boolean', 'object', 'array', 'undefined', 'null', 'function'
 */

export function getCorrectType(value) {
  if (Array.isArray(value)) {
    return "array";
  } else if (value === null) {
    return "null";
  } else {
    return typeof value;
  }
}

/**
 * CSV 문자열을 2차원 배열로 변환합니다.
 *
 * @param {string} csvString - 변환할 CSV 문자열입니다.
 * @returns {string[][]} 2차원 배열 형태의 CSV 데이터입니다.
 */
export function changeCSVto2DArray(csvString) {
  return csvString
    .trim()
    .split("\n")
    .map((e) => e.split(","));
}

export function getAverageAge(csvString) {
  let ageSum = 0;
  let total = 0;
  const rows = changeCSVto2DArray(csvString);
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][1]) {
      ageSum += Number(rows[i][1]);
      total += 1;
    }
  }
  if (ageSum === 0) return ageSum;
  return ageSum / total;
}

/**
 * CSV 문자열에서 'Alice'라는 이름을 가진 사람의 정보를 객체로 반환합니다.
 *
 * @param {string} csvString - CSV 형식의 문자열입니다.
 * @returns {Object|null} 'Alice'라는 이름을 가진 사람의 정보를 포함한 객체를 반환합니다. 찾을 수 없는 경우 null을 반환합니다.
 * @property {string} name - 이름
 * @property {string} age - 나이
 * @property {string} city - 도시
 * @property {string} occupation - 직업
 */
export function findAliceReturnObject(csvString) {
  const rows = changeCSVto2DArray(csvString);
  let aliceIndex = -1;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0].includes("Alice")) {
      aliceIndex = i;
      break;
    }
  }

  if (aliceIndex === -1) {
    return null;
  }

  return {
    name: rows[aliceIndex][0],
    age: rows[aliceIndex][1],
    city: rows[aliceIndex][2],
    occupation: rows[aliceIndex][3],
  };
}

/**
 * CSV 문자열에서 'Teacher' 직업을 가진 사람의 인덱스 목록을 반환합니다.
 *
 * @param {string} csvString - CSV 형식의 문자열입니다.
 * @returns {number[]} 'Teacher' 직업을 가진 사람들의 인덱스 배열을 반환합니다.
 */
export function findTeacherIndices(csvString) {
  const rows = changeCSVto2DArray(csvString);
  const indices = [];
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][3] === "Teacher") {
      indices.push(i);
    }
  }
  return indices;
}

/**
 * 빙고 보드에서 빙고가 있는지 확인하는 함수.
 *
 * @param {string[][]} board - 빙고 보드 배열.
 * @returns {boolean} - 빙고가 있으면 true, 없으면 false.
 */
export function bingo(board) {
  return checkRows(board) || checkColumns(board) || checkDiagonals(board);
}

/**
 * 행을 검사하여 빙고가 있는지 확인하는 함수.
 *
 * @param {string[][]} board - 빙고 보드 배열.
 * @returns {boolean} - 행에 빙고가 있으면 true, 없으면 false.
 */
export function checkRows(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].every((cell) => cell === "✅")) {
      return true;
    }
  }
  return false;
}

/**
 * 열을 검사하여 빙고가 있는지 확인하는 함수.
 *
 * @param {string[][]} board - 빙고 보드 배열.
 * @returns {boolean} - 열에 빙고가 있으면 true, 없으면 false.
 */
export function checkColumns(board) {
  const size = board.length;
  for (let i = 0; i < size; i++) {
    let columnWin = true;
    for (let j = 0; j < size; j++) {
      if (board[j][i] !== "✅") {
        columnWin = false;
        break;
      }
    }
    if (columnWin) {
      return true;
    }
  }
  return false;
}

/**
 * 대각선을 검사하여 빙고가 있는지 확인하는 함수.
 *
 * @param {string[][]} board - 빙고 보드 배열.
 * @returns {boolean} - 대각선에 빙고가 있으면 true, 없으면 false.
 */
export function checkDiagonals(board) {
  const size = board.length;
  let diagonalWin1 = true;
  let diagonalWin2 = true;

  for (let i = 0; i < size; i++) {
    if (board[i][i] !== "✅") {
      diagonalWin1 = false;
    }
    if (board[i][size - 1 - i] !== "✅") {
      diagonalWin2 = false;
    }
  }

  return diagonalWin1 || diagonalWin2;
}

// 테스트용 빙고 보드
const bingoBoard = [
  ["✅", "❎", "❎"],
  ["✅", "❎", "❎"],
  ["✅", "❎", "❎"],
];

console.log(bingo(bingoBoard)); // true
