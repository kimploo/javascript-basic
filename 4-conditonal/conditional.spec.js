import { beforeAll } from "vitest";
import { describe, expect, test, it } from "vitest";

const CONDITIONAL_FILE_PATH =
  process.env.NODE_ENV === "reference"
    ? "./conditional.reference.js"
    : "./conditional.js";

describe("변수 TODO", () => {
  let module;

  beforeAll(async () => {
    module = await import(CONDITIONAL_FILE_PATH);
  });

  describe("미니 계산기 함수 테스트", () => {
    it("덧셈 테스트", () => {
      const { miniCalculator } = module;
      const result = miniCalculator(2, 3, "+");
      expect(result).toBe(5);
    });

    it("뺄셈 테스트", () => {
      const { miniCalculator } = module;
      const result = miniCalculator(5, 2, "-");
      expect(result).toBe(3);
    });

    it("곱셈 테스트", () => {
      const { miniCalculator } = module;
      const result = miniCalculator(4, 3, "*");
      expect(result).toBe(12);
    });

    it("나눗셈 테스트", () => {
      const { miniCalculator } = module;
      const result = miniCalculator(6, 2, "/");
      expect(result).toBe(3);
    });

    it("0으로 나누기 테스트", () => {
      const { miniCalculator } = module;
      const result = miniCalculator(6, 0, "/");
      expect(result).toBe(Infinity);
    });

    // #TODO: ? 통과 안되는 이유 고민
    it("쓰이지 않는 연산자 테스트", () => {
      const { miniCalculator } = module;
      const result = miniCalculator(6, 2, "%");
      expect(result).toBeNaN();
    });
  });

  describe("피즈버즈 함수 테스트", () => {
    it("3과 5의 배수인 경우", () => {
      const { fizzBuzz } = module;
      const result = fizzBuzz(15);
      expect(result).toBe("FizzBuzz");
    });

    it("3의 배수인 경우", () => {
      const { fizzBuzz } = module;
      const result = fizzBuzz(9);
      expect(result).toBe("Fizz");
    });

    it("5의 배수인 경우", () => {
      const { fizzBuzz } = module;
      const result = fizzBuzz(10);
      expect(result).toBe("Buzz");
    });

    it("어느 경우에도 해당되지 않는 경우", () => {
      const { fizzBuzz } = module;
      const result = fizzBuzz(7);
      expect(result).toBe("No FizzBuzz");
    });

    it("0인 경우", () => {
      const { fizzBuzz } = module;
      const result = fizzBuzz(0);
      expect(result).toBe("FizzBuzz");
    });

    it("음수인 경우 - 3의 배수", () => {
      const { fizzBuzz } = module;
      const result = fizzBuzz(-9);
      expect(result).toBe("Fizz");
    });

    it("음수인 경우 - 5의 배수", () => {
      const { fizzBuzz } = module;
      const result = fizzBuzz(-10);
      expect(result).toBe("Buzz");
    });

    it("음수인 경우 - 3과 5의 배수", () => {
      const { fizzBuzz } = module;
      const result = fizzBuzz(-15);
      expect(result).toBe("FizzBuzz");
    });

    it("음수인 경우 - 어느 경우에도 해당되지 않음", () => {
      const { fizzBuzz } = module;
      const result = fizzBuzz(-7);
      expect(result).toBe("No FizzBuzz");
    });
  });
});
