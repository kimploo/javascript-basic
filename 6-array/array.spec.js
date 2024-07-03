import { beforeAll } from "vitest";
import { describe, expect, it } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

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

  describe("changeCSVto2DArray 함수 테스트", () => {
    it("단일 행 CSV 문자열 변환 테스트", () => {
      const csvString = "a,b,c";
      const result = module.changeCSVto2DArray(csvString);
      expect(result).toEqual([["a", "b", "c"]]);
    });

    it("다중 행 CSV 문자열 변환 테스트", () => {
      const csvString = "a,b,c\nd,e,f\ng,h,i";
      const result = module.changeCSVto2DArray(csvString);
      expect(result).toEqual([
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
      ]);
    });

    it("빈 CSV 문자열 테스트", () => {
      const csvString = "";
      const result = module.changeCSVto2DArray(csvString);
      expect(result).toEqual([[""]]);
    });

    it("행에 빈 값 포함된 CSV 문자열 테스트", () => {
      const csvString = "a,b,c\n,,\nd,e,f";
      const result = module.changeCSVto2DArray(csvString);
      expect(result).toEqual([
        ["a", "b", "c"],
        ["", "", ""],
        ["d", "e", "f"],
      ]);
    });
    it("다양한 데이터가 포함된 CSV 문자열 테스트", () => {
      // 테스트용 csvString
      const csvString = readFileSync(
        resolve(import.meta.dirname, "example.csv"),
        "utf8",
      );
      const result = module.changeCSVto2DArray(csvString);
      expect(result).toEqual([
        ["Name", "Age", "City", "Occupation"],
        ["John Doe", "30", "New York", "Engineer"],
        ["Jane Smith", "25", "Los Angeles", "Designer"],
        ["Alice Johnson", "28", "Chicago", "Developer"],
        ["Bob Brown", "35", "Houston", "Teacher"],
        ["Charlie Davis", "22", "Philadelphia", "Intern"],
        ["Diana Green", "32", "Phoenix", "Consultant"],
        ["Edward White", "29", "San Antonio", "Analyst"],
        ["Fiona Black", "27", "Dallas", "Teacher"],
        ["George Clark", "33", "San Diego", "Architect"],
        ["Helen Martinez", "31", "San Jose", "Doctor"],
      ]);
    });
  });

  describe("getAverageAge 함수 테스트", () => {
    it("단일 행 CSV 문자열에서 평균 나이 계산 테스트", () => {
      const csvString = `Name,Age,City,Occupation
  John Doe,30,New York,Engineer`;
      const result = module.getAverageAge(csvString);
      expect(result).toBe(30);
    });

    it("다중 행 CSV 문자열에서 평균 나이 계산 테스트", () => {
      const csvString = readFileSync(
        resolve(import.meta.dirname, "example.csv"),
        "utf8",
      );

      const result = module.getAverageAge(csvString);
      expect(result).toBeCloseTo(29.2, 1); // 평균은 29.2
    });

    it("빈 CSV 문자열에서 평균 나이 계산 테스트", () => {
      const csvString = "Name,Age,City,Occupation";
      const result = module.getAverageAge(csvString);
      expect(result).toBe(0);
    });

    it("한 행에 빈 값이 있는 CSV 문자열에서 평균 나이 계산 테스트", () => {
      const csvString = `Name,Age,City,Occupation
John Doe,30,New York,Engineer
,,,
Jane Smith,25,Los Angeles,Designer`;

      const result = module.getAverageAge(csvString);
      expect(result).toBeCloseTo(27.5, 1); // 평균은 27.5
    });
  });

  describe("findAliceReturnObject 함수 테스트", () => {
    it("Alice를 포함하는 이름이 있는 경우 객체 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
John Doe,30,New York,Engineer
Jane Smith,25,Los Angeles,Designer
Alice Johnson,28,Chicago,Developer
Bob Brown,35,Houston,Teacher`;

      const result = module.findAliceReturnObject(csvString);
      expect(result).toEqual({
        name: "Alice Johnson",
        age: "28",
        city: "Chicago",
        occupation: "Developer",
      });
    });

    it("Alice를 포함하는 이름이 없는 경우 null 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
John Doe,30,New York,Engineer
Jane Smith,25,Los Angeles,Designer`;

      const result = module.findAliceReturnObject(csvString);
      expect(result).toBeNull();
    });

    it("여러 Alice가 있는 경우 첫 번째 Alice 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
Alice Johnson,28,Chicago,Developer
Alice Brown,35,Houston,Teacher`;

      const result = module.findAliceReturnObject(csvString);
      expect(result).toEqual({
        name: "Alice Johnson",
        age: "28",
        city: "Chicago",
        occupation: "Developer",
      });
    });

    it("Alice가 다른 단어의 일부로 포함된 경우 객체 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
Alicia Keys,40,New York,Singer
Bob Brown,35,Houston,Teacher`;

      const result = module.findAliceReturnObject(csvString);
      expect(result).toBeNull();
    });
  });

  describe("findTeacherIndices 함수 테스트", () => {
    it("Teacher 직업을 가진 사람의 인덱스 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
John Doe,30,New York,Engineer
Jane Smith,25,Los Angeles,Designer
Alice Johnson,28,Chicago,Developer
Bob Brown,35,Houston,Teacher
Charlie Davis,22,Philadelphia,Intern
Diana Green,32,Phoenix,Consultant
Edward White,29,San Antonio,Analyst
Fiona Black,27,Dallas,Teacher
George Clark,33,San Diego,Architect
Helen Martinez,31,San Jose,Doctor`;

      const result = module.findTeacherIndices(csvString);
      expect(result).toEqual([4, 8]);
    });

    it("Teacher 직업을 가진 사람이 없는 경우 빈 배열 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
John Doe,30,New York,Engineer
Jane Smith,25,Los Angeles,Designer
Alice Johnson,28,Chicago,Developer`;

      const result = module.findTeacherIndices(csvString);
      expect(result).toEqual([]);
    });

    it("Teacher 직업을 가진 사람이 한 명 있는 경우 인덱스 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
John Doe,30,New York,Engineer
Jane Smith,25,Los Angeles,Designer
Bob Brown,35,Houston,Teacher`;

      const result = module.findTeacherIndices(csvString);
      expect(result).toEqual([3]);
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
