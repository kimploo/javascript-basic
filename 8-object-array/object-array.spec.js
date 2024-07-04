import { beforeAll } from "vitest";
import { describe, expect, it } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

const FILE_PATH =
  process.env.NODE_ENV === "reference"
    ? "./object-array.reference.js"
    : "./object-array.js";

describe("객체 배열 TODO", () => {
  let module;

  beforeAll(async () => {
    module = await import(FILE_PATH);
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
        Name: "Alice Johnson",
        Age: "28",
        City: "Chicago",
        Occupation: "Developer",
      });
    });

    it("Alice를 포함하는 이름이 없는 경우 null 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
John Doe,30,New York,Engineer
Jane Smith,25,Los Angeles,Designer`;

      const result = module.findAliceReturnObject(csvString);
      expect(result).toBeFalsy();
    });

    it("여러 Alice가 있는 경우 첫 번째 Alice 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
Alice Johnson,28,Chicago,Developer
Alice Brown,35,Houston,Teacher`;

      const result = module.findAliceReturnObject(csvString);
      expect(result).toEqual({
        Name: "Alice Johnson",
        Age: "28",
        City: "Chicago",
        Occupation: "Developer",
      });
    });

    it("Alice가 다른 단어의 일부로 포함된 경우 객체 반환 테스트", () => {
      const csvString = `Name,Age,City,Occupation
Alicia Keys,40,New York,Singer
Bob Brown,35,Houston,Teacher`;

      const result = module.findAliceReturnObject(csvString);
      expect(result).toBeFalsy();
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
      expect(result).toEqual([3, 7]);
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
      expect(result).toEqual([2]);
    });
  });
});
