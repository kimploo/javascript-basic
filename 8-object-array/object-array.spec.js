import { beforeAll } from "vitest";
import { describe, expect, it } from "vitest";

const FILE_PATH =
  process.env.NODE_ENV === "reference" ? "./array.reference.js" : "./array.js";

describe("배열 TODO", () => {
  let module;

  beforeAll(async () => {
    module = await import(FILE_PATH);
  });

  describe("getCorrectType 함수 테스트", () => {
    it('배열을 입력했을 때 "array"를 반환해야 합니다', () => {
      const result = module.getCorrectType([]);
      expect(result).toBe("array");
    });

    it('null을 입력했을 때 "null"을 반환해야 합니다', () => {
      const result = module.getCorrectType(null);
      expect(result).toBe("null");
    });

    it('숫자를 입력했을 때 "number"를 반환해야 합니다', () => {
      const result = module.getCorrectType(123);
      expect(result).toBe("number");
    });

    it('문자열을 입력했을 때 "string"을 반환해야 합니다', () => {
      const result = module.getCorrectType("hello");
      expect(result).toBe("string");
    });

    it('불리언을 입력했을 때 "boolean"을 반환해야 합니다', () => {
      const result = module.getCorrectType(true);
      expect(result).toBe("boolean");
    });

    it('객체를 입력했을 때 "object"를 반환해야 합니다', () => {
      const result = module.getCorrectType({});
      expect(result).toBe("object");
    });

    it('undefined를 입력했을 때 "undefined"를 반환해야 합니다', () => {
      const result = module.getCorrectType(undefined);
      expect(result).toBe("undefined");
    });

    it('함수를 입력했을 때 "function"을 반환해야 합니다', () => {
      const result = module.getCorrectType(function () {});
      expect(result).toBe("function");
    });
  });

  // 테스트용 빙고 보드
  const bingoBoardRow = [
    ["✅", "✅", "✅"],
    ["❎", "❎", "❎"],
    ["❎", "❎", "❎"],
  ];

  const bingoBoardColumn = [
    ["✅", "❎", "❎"],
    ["✅", "❎", "❎"],
    ["✅", "❎", "❎"],
  ];

  const bingoBoardDiagonal1 = [
    ["✅", "❎", "❎"],
    ["❎", "✅", "❎"],
    ["❎", "❎", "✅"],
  ];

  const bingoBoardDiagonal2 = [
    ["❎", "❎", "✅"],
    ["❎", "✅", "❎"],
    ["✅", "❎", "❎"],
  ];

  const noBingoBoard = [
    ["✅", "❎", "❎"],
    ["❎", "✅", "❎"],
    ["❎", "❎", "❎"],
  ];

  describe("checkRows 함수 테스트", () => {
    it("행에 빙고가 있는 경우 true를 반환해야 합니다", () => {
      const result = module.checkRows(bingoBoardRow);
      expect(result).toBe(true);
    });

    it("행에 빙고가 없는 경우 false를 반환해야 합니다", () => {
      const result = module.checkRows(noBingoBoard);
      expect(result).toBe(false);
    });
  });

  describe("checkColumns 함수 테스트", () => {
    it("열에 빙고가 있는 경우 true를 반환해야 합니다", () => {
      const result = module.checkColumns(bingoBoardColumn);
      expect(result).toBe(true);
    });

    it("열에 빙고가 없는 경우 false를 반환해야 합니다", () => {
      const result = module.checkColumns(noBingoBoard);
      expect(result).toBe(false);
    });
  });

  describe("checkDiagonals 함수 테스트", () => {
    it("대각선에 빙고가 있는 경우 true를 반환해야 합니다", () => {
      const result1 = module.checkDiagonals(bingoBoardDiagonal1);
      expect(result1).toBe(true);

      const result2 = module.checkDiagonals(bingoBoardDiagonal2);
      expect(result2).toBe(true);
    });

    it("대각선에 빙고가 없는 경우 false를 반환해야 합니다", () => {
      const result = module.checkDiagonals(noBingoBoard);
      expect(result).toBe(false);
    });
  });

  describe("bingo 함수 테스트", () => {
    it("빙고가 있는 경우 true를 반환해야 합니다", () => {
      const resultRow = module.bingo(bingoBoardRow);
      expect(resultRow).toBe(true);

      const resultColumn = module.bingo(bingoBoardColumn);
      expect(resultColumn).toBe(true);

      const resultDiagonal1 = module.bingo(bingoBoardDiagonal1);
      expect(resultDiagonal1).toBe(true);

      const resultDiagonal2 = module.bingo(bingoBoardDiagonal2);
      expect(resultDiagonal2).toBe(true);
    });

    it("빙고가 없는 경우 false를 반환해야 합니다", () => {
      const result = module.bingo(noBingoBoard);
      expect(result).toBe(false);
    });
  });
});
