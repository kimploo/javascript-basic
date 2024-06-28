import { beforeAll, describe, expect, test } from "vitest";

const VARIABLE_FILE_PATH =
  process.env.NODE_ENV === "reference"
    ? "./function.reference.js"
    : "./function.js";

describe("함수 TODO", () => {
  let module;

  beforeAll(async () => {
    module = await import(VARIABLE_FILE_PATH);
  });

  test("variable.js 파일의 모든 에러를 해결하세요.", async () => {
    const { funcDeclaration } = module;
    expect(funcDeclaration()).toBe("funcDeclaration");
  });
});
