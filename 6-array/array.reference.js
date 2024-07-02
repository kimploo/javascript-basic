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
