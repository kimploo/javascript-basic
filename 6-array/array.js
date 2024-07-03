import { readFileSync } from "fs";

/**
 * 주어진 값의 정확한 타입을 반환합니다.
 *
 * @param {*} value - 타입을 확인할 값.
 * @returns {string} - 'string', 'number', 'boolean', 'object', 'array', 'undefined', 'null', 'function'
 */
export function getCorrectType(value) {}

// 테스트용 빙고 보드
const bingoBoard = [
  ["✅", "❎", "❎"],
  ["✅", "❎", "❎"],
  ["✅", "❎", "❎"],
];

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

// console.log(bingo(bingoBoard)); // should be true
