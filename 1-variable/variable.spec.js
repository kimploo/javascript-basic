import { describe, expect, test } from "vitest";

const VARIABLE_FILE_PATH =
  process.env.NODE_ENV === "reference"
    ? "./variable.reference.js"
    : "./variable.js";

describe("변수 TODO", () => {
  test("variable.js 파일의 모든 에러를 해결하세요.", async () => {
    async function loadModule() {
      const module = await import(VARIABLE_FILE_PATH);
      return module;
    }

    expect(loadModule).not.toThrow();
  });

  test("num에 42를 할당합니다.", async () => {
    const { num } = await import(VARIABLE_FILE_PATH);
    expect(num).toBe(42);
  });

  test("MAX_NUM은 JavaScript에서 표현 가능한 최대 정수 값을 유지합니다.", async () => {
    const { MAX_NUM } = await import(VARIABLE_FILE_PATH);
    expect(MAX_NUM).toBe(Number.MAX_SAFE_INTEGER);
  });

  test("새로운 변수 affirmation를 만들고, 문자열 '프론트엔드 개발자 되기'을 할당합니다.", async () => {
    const { affirmation } = await import(VARIABLE_FILE_PATH);
    expect(affirmation).toBe("프론트엔드 개발자 되기");
  });
});
