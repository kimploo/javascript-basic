import { vi } from "vitest";
import { beforeAll } from "vitest";
import { describe, expect, test } from "vitest";

const TYPE_FILE_PATH =
  process.env.NODE_ENV === "reference" ? "./type.reference.js" : "./type.js";

describe("타입  TODO", () => {
  let module;

  beforeAll(async () => {
    module = await import(TYPE_FILE_PATH);
  });

  test("toFixed()로 numToFixed에 3를 할당하세요.", async () => {
    const { num, numToFixed } = module;
    expect(num).toBe(3.14159);
    expect(numToFixed).toBe("3");
  });

  test("numPower는 2의 2승입니다.", async () => {
    const { numPower } = module;
    expect(numPower).toBe(4);
  });

  test("numSqrt는 2의 제곱근입니다.", async () => {
    const { numSqrt } = module;
    expect(numSqrt).toBe(1.4142135623730951);
  });

  test("greetingToUpperCase에 greeting을 대문자로 바꾼 문자열을 할당합니다.", async () => {
    const { greeting, greetingToUpperCase } = module;
    expect(greeting).toBe("hello world");
    expect(greetingToUpperCase).toBe("HELLO WORLD");
  });

  test("frontEndDeveloper에 '프론트엔드 개발자', backendDeveloper에 '백엔드 개발자'를 할당하세요.", async () => {
    const { frontEndDeveloper, backendDeveloper } = module;
    expect(frontEndDeveloper).toBe("프론트엔드 개발자");
    expect(backendDeveloper).toBe("백엔드 개발자");
  });

  test("'the lazy dog'를 slice하여 할당하세요.", async () => {
    const { theLazyDog } = module;
    expect(theLazyDog).toBe("the lazy dog");
  });

  test("'The quick brown fox'를 slice하여 할당하세요.", async () => {
    const { theQuickBrownFox } = module;
    expect(theQuickBrownFox).toBe("The quick brown fox");
  });

  test("'jumps'를 slice하여 할당하세요.", async () => {
    const { jumps } = module;
    expect(jumps).toBe("jumps");
  });
});
