import { beforeAll, describe, expect, test, it } from "vitest";

const VARIABLE_FILE_PATH =
  process.env.NODE_ENV === "reference"
    ? "./function.reference.js"
    : "./function.js";

describe("함수 TODO", () => {
  let module;

  beforeAll(async () => {
    module = await import(VARIABLE_FILE_PATH);
  });

  describe("함수 TODO", () => {
    test("funcDeclaration 함수는 'funcDeclaration'을 리턴합니다.", async () => {
      const { funcDeclaration } = module;
      expect(funcDeclaration()).toBe("funcDeclaration");
    });

    test("funcExpression 함수는 'funcExpression'을 리턴합니다.", async () => {
      const { funcExpression } = module;
      expect(funcExpression()).toBe("funcExpression");
    });

    test("arrowFunc 함수는 'arrowFunc'을 리턴합니다.", async () => {
      const { arrowFunc } = module;
      expect(arrowFunc()).toBe("arrowFunc");
    });
  });

  describe("sum 함수", () => {
    test("두 양수의 합을 리턴합니다", () => {
      const { sum } = module;
      expect(sum(1, 2)).toBe(3);
    });

    test("두 음수의 합을 리턴합니다", () => {
      const { sum } = module;
      expect(sum(-1, -2)).toBe(-3);
    });

    test("양수와 음수의 합을 리턴합니다", () => {
      const { sum } = module;
      expect(sum(1, -2)).toBe(-1);
    });

    test("0과 양수의 합을 리턴합니다", () => {
      const { sum } = module;
      expect(sum(0, 2)).toBe(2);
    });

    test("0과 음수의 합을 리턴합니다", () => {
      const { sum } = module;
      expect(sum(0, -2)).toBe(-2);
    });

    test("두 숫자가 모두 0일 때 0을 리턴합니다", () => {
      const { sum } = module;
      expect(sum(0, 0)).toBe(0);
    });

    test("소수의 합을 올바르게 리턴합니다", () => {
      const { sum } = module;
      expect(sum(1.5, 2.3)).toBeCloseTo(3.8);
    });
  });

  describe("subtract", () => {
    test("두 양의 숫자의 차를 반환해야 합니다", () => {
      const { subtract } = module;
      expect(subtract(10, 5)).toBe(5);
    });

    test("더 큰 숫자를 더 작은 숫자에서 뺄 때의 차를 반환해야 합니다", () => {
      const { subtract } = module;
      expect(subtract(5, 10)).toBe(-5);
    });

    test("두 숫자가 같을 때 0을 반환해야 합니다", () => {
      const { subtract } = module;
      expect(subtract(5, 5)).toBe(0);
    });

    test("음수를 올바르게 처리해야 합니다", () => {
      const { subtract } = module;
      expect(subtract(-5, -10)).toBe(5);
      expect(subtract(-10, -5)).toBe(-5);
    });

    test("양수와 음수의 조합을 올바르게 처리해야 합니다", () => {
      const { subtract } = module;
      expect(subtract(5, -5)).toBe(10);
      expect(subtract(-5, 5)).toBe(-10);
    });

    test("0을 올바르게 처리해야 합니다", () => {
      const { subtract } = module;
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(5, 0)).toBe(5);
    });
  });

  describe("divide", () => {
    test("두 양의 숫자의 나눗셈 결과를 반환해야 합니다", () => {
      const { divide } = module;
      expect(divide(10, 5)).toBe(2);
    });

    test("더 작은 숫자를 더 큰 숫자로 나눌 때의 결과를 반환해야 합니다", () => {
      const { divide } = module;
      expect(divide(5, 10)).toBe(0.5);
    });

    test("음수를 올바르게 처리해야 합니다", () => {
      const { divide } = module;
      expect(divide(-10, 5)).toBe(-2);
      expect(divide(10, -5)).toBe(-2);
      expect(divide(-10, -5)).toBe(2);
    });

    test("0을 올바르게 처리해야 합니다", () => {
      const { divide } = module;
      expect(divide(0, 5)).toBe(0);
    });

    test("0으로 나누는 경우 에러를 발생시켜야 합니다", () => {
      const { divide } = module;
      expect(() => divide(5, 0)).toThrow("0으로 나눌 수 없습니다.");
    });
  });

  describe("multiply", () => {
    it("두 양의 숫자의 곱을 반환해야 합니다", () => {
      const { multiply } = module;
      expect(multiply(10, 5)).toBe(50);
    });

    it("음수를 올바르게 처리해야 합니다", () => {
      const { multiply } = module;

      expect(multiply(-10, 5)).toBe(-50);
      expect(multiply(10, -5)).toBe(-50);
      expect(multiply(-10, -5)).toBe(50);
    });

    it("0을 곱할 때 0을 반환해야 합니다", () => {
      const { multiply } = module;

      expect(multiply(0, 5)).toBe(0);
      expect(multiply(10, 0)).toBe(0);
    });

    it("하나의 숫자가 1일 때 원래 숫자를 반환해야 합니다", () => {
      const { multiply } = module;
      expect(multiply(1, 5)).toBe(5);
      expect(multiply(10, 1)).toBe(10);
    });
  });

  describe("isEqual", () => {
    it("두 숫자가 같으면 true를 반환해야 합니다", () => {
      const { isEqual } = module;
      expect(isEqual(5, 5)).toBe(true);
    });

    it("두 문자열이 같으면 true를 반환해야 합니다", () => {
      const { isEqual } = module;
      expect(isEqual("hello", "hello")).toBe(true);
    });

    it("두 값이 다르면 false를 반환해야 합니다", () => {
      const { isEqual } = module;
      expect(isEqual(5, 10)).toBe(false);
      expect(isEqual("hello", "world")).toBe(false);
    });

    it("참조 타입의 equality test는 하지 않습니다 (1)", () => {
      const { isEqual } = module;
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(false);
    });

    it("참조 타입의 equality test는 하지 않습니다 (2)", () => {
      const { isEqual } = module;
      expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(false);
    });

    it("undefined와 null이 다르면 false를 반환해야 합니다", () => {
      const { isEqual } = module;
      expect(isEqual(undefined, null)).toBe(false);
    });

    it("두 값이 엄격히 다르면 false를 반환해야 합니다", () => {
      const { isEqual } = module;
      expect(isEqual(0, false)).toBe(false);
      expect(isEqual("", false)).toBe(false);
    });
  });

  describe("isBiggerThan", () => {
    it("첫 번째 숫자가 두 번째 숫자보다 크면 true를 반환해야 합니다", () => {
      const { isBiggerThan } = module;
      expect(isBiggerThan(10, 5)).toBe(true);
    });

    it("첫 번째 숫자가 두 번째 숫자보다 작으면 false를 반환해야 합니다", () => {
      const { isBiggerThan } = module;
      expect(isBiggerThan(5, 10)).toBe(false);
    });

    it("두 숫자가 같으면 false를 반환해야 합니다", () => {
      const { isBiggerThan } = module;
      expect(isBiggerThan(5, 5)).toBe(false);
    });

    it("첫 번째 문자열이 두 번째 문자열보다 사전 순으로 뒤에 있으면 true를 반환해야 합니다", () => {
      const { isBiggerThan } = module;
      expect(isBiggerThan("b", "a")).toBe(true);
    });

    it("첫 번째 문자열이 두 번째 문자열보다 사전 순으로 앞에 있으면 false를 반환해야 합니다", () => {
      const { isBiggerThan } = module;
      expect(isBiggerThan("a", "b")).toBe(false);
    });

    it("첫 번째 문자열이 두 번째 문자열과 같으면 false를 반환해야 합니다", () => {
      const { isBiggerThan } = module;
      expect(isBiggerThan("a", "a")).toBe(false);
    });

    it("숫자와 문자열 비교 시 숫자가 크면 true를 반환해야 합니다", () => {
      const { isBiggerThan } = module;
      expect(isBiggerThan(10, "5")).toBe(true);
    });

    it("숫자와 문자열 비교 시 문자열이 크면 false를 반환해야 합니다", () => {
      const { isBiggerThan } = module;
      expect(isBiggerThan("5", 10)).toBe(false);
    });

    it("null이나 undefined 값이 비교될 때 false를 반환해야 합니다", () => {
      const { isBiggerThan } = module;
      expect(isBiggerThan(null, 5)).toBe(false);
      expect(isBiggerThan(5, undefined)).toBe(false);
    });
  });

  describe("isSmallerThan", () => {
    it("첫 번째 숫자가 두 번째 숫자보다 작으면 true를 반환해야 합니다", () => {
      const { isSmallerThan } = module;
      expect(isSmallerThan(5, 10)).toBe(true);
    });

    it("첫 번째 숫자가 두 번째 숫자보다 크면 false를 반환해야 합니다", () => {
      const { isSmallerThan } = module;
      expect(isSmallerThan(10, 5)).toBe(false);
    });

    it("두 숫자가 같으면 false를 반환해야 합니다", () => {
      const { isSmallerThan } = module;
      expect(isSmallerThan(5, 5)).toBe(false);
    });

    it("첫 번째 문자열이 두 번째 문자열보다 사전 순으로 앞에 있으면 true를 반환해야 합니다", () => {
      const { isSmallerThan } = module;
      expect(isSmallerThan("a", "b")).toBe(true);
    });

    it("첫 번째 문자열이 두 번째 문자열보다 사전 순으로 뒤에 있으면 false를 반환해야 합니다", () => {
      const { isSmallerThan } = module;
      expect(isSmallerThan("b", "a")).toBe(false);
    });

    it("첫 번째 문자열이 두 번째 문자열과 같으면 false를 반환해야 합니다", () => {
      const { isSmallerThan } = module;
      expect(isSmallerThan("a", "a")).toBe(false);
    });

    // 적절한 비교일까요?
    it("숫자와 문자열 비교 시 숫자가 작으면 true를 반환해야 합니다", () => {
      const { isSmallerThan } = module;
      expect(isSmallerThan(5, "10")).toBe(true);
    });

    it("숫자와 문자열 비교 시 문자열이 작으면 false를 반환해야 합니다", () => {
      const { isSmallerThan } = module;
      expect(isSmallerThan("10", 5)).toBe(false);
    });

    // it("null이나 undefined 값이 비교될 때 false를 반환해야 합니다", () => {
    //   const { isSmallerThan } = module;
    //   expect(isSmallerThan(null, 5)).toBe(false);
    //   expect(isSmallerThan(5, undefined)).toBe(false);
    // });
  });
});
