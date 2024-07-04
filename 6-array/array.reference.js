export function getCorrectType(value) {
  if (Array.isArray(value)) {
    return "array";
  } else if (value === null) {
    return "null";
  } else {
    return typeof value;
  }
}

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

export function bingo(board) {
  return checkRows(board) || checkColumns(board) || checkDiagonals(board);
}

export function checkRows(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].every((cell) => cell === "✅")) {
      return true;
    }
  }
  return false;
}

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

// console.log(bingo(bingoBoard)); // true
