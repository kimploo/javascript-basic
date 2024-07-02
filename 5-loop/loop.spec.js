import { beforeAll } from "vitest";
import { describe, expect, it } from "vitest";

const FILE_PATH =
  process.env.NODE_ENV === "reference" ? "./loop.reference.js" : "./loop.js";

describe("반복문 TODO", () => {
  let module;

  beforeAll(async () => {
    module = await import(FILE_PATH);
  });

  describe("getCharCount 함수 테스트", () => {
    it("빈 문자열을 입력했을 때 0을 반환해야 합니다", () => {
      const result = module.getCharCount("");
      expect(result).toBe(0);
    });

    it("단일 문자를 입력했을 때 1을 반환해야 합니다", () => {
      const result = module.getCharCount("a");
      expect(result).toBe(1);
    });

    it("여러 문자를 입력했을 때 정확한 문자 수를 반환해야 합니다", () => {
      const result = module.getCharCount("hello");
      expect(result).toBe(5);
    });

    it("공백이 포함된 문자열을 입력했을 때 정확한 문자 수를 반환해야 합니다", () => {
      const result = module.getCharCount("hello world");
      expect(result).toBe(11);
    });

    it("특수 문자가 포함된 문자열을 입력했을 때 정확한 문자 수를 반환해야 합니다", () => {
      const result = module.getCharCount("hello!@#");
      expect(result).toBe(8);
    });
  });

  describe("gugudan 함수 테스트", () => {
    it("2단을 입력했을 때 구구단 결과를 올바르게 반환해야 합니다", () => {
      const result = module.gugudan(2);
      expect(result).toBe("2,4,6,8,10,12,14,16,18");
    });

    it("5단을 입력했을 때 구구단 결과를 올바르게 반환해야 합니다", () => {
      const result = module.gugudan(5);
      expect(result).toBe("5,10,15,20,25,30,35,40,45");
    });

    it("9단을 입력했을 때 구구단 결과를 올바르게 반환해야 합니다", () => {
      const result = module.gugudan(9);
      expect(result).toBe("9,18,27,36,45,54,63,72,81");
    });

    it("1단을 입력했을 때 구구단 결과를 올바르게 반환해야 합니다", () => {
      const result = module.gugudan(1);
      expect(result).toBe("1,2,3,4,5,6,7,8,9");
    });

    it("10단을 입력했을 때 구구단 결과를 올바르게 반환해야 합니다", () => {
      const result = module.gugudan(10);
      expect(result).toBe("10,20,30,40,50,60,70,80,90");
    });
  });

  describe("countChar 함수 테스트", () => {
    it("빈 문자열을 입력했을 때 0을 반환해야 합니다", () => {
      const result = module.countChar("", "a");
      expect(result).toBe(0);
    });

    it("특정 문자가 없는 문자열을 입력했을 때 0을 반환해야 합니다", () => {
      const result = module.countChar("hello world", "x");
      expect(result).toBe(0);
    });

    it("특정 문자가 한 번 나타나는 문자열을 입력했을 때 1을 반환해야 합니다", () => {
      const result = module.countChar("hello world", "h");
      expect(result).toBe(1);
    });

    it("특정 문자가 여러 번 나타나는 문자열을 입력했을 때 올바른 개수를 반환해야 합니다", () => {
      const result = module.countChar("hello world", "l");
      expect(result).toBe(3);
    });

    it("공백 문자를 셀 때 올바른 개수를 반환해야 합니다", () => {
      const result = module.countChar("hello world", " ");
      expect(result).toBe(1);
    });

    it("특수 문자를 셀 때 올바른 개수를 반환해야 합니다", () => {
      const result = module.countChar("hello!@# world!@#", "@");
      expect(result).toBe(2);
    });
  });

  describe("replaceFromTo 함수 테스트", () => {
    it("특정 문자가 없는 문자열에서 변환되지 않은 문자열을 반환해야 합니다", () => {
      const result = module.replaceFromTo("hello world", "x", "y");
      expect(result).toBe("hello world");
    });

    it("특정 문자가 한 번 나타나는 문자열을 변환했을 때 올바른 결과를 반환해야 합니다", () => {
      const result = module.replaceFromTo("hello world", "h", "j");
      expect(result).toBe("jello world");
    });

    it("특정 문자가 여러 번 나타나는 문자열을 변환했을 때 올바른 결과를 반환해야 합니다", () => {
      const result = module.replaceFromTo("hello world", "l", "r");
      expect(result).toBe("herro worrd");
    });

    it("공백 문자를 변환했을 때 올바른 결과를 반환해야 합니다", () => {
      const result = module.replaceFromTo("hello world", " ", "-");
      expect(result).toBe("hello-world");
    });

    it("특수 문자를 변환했을 때 올바른 결과를 반환해야 합니다", () => {
      const result = module.replaceFromTo("hello!@# world!@#", "@", "*");
      expect(result).toBe("hello!*# world!*#");
    });

    it("빈 문자열을 입력했을 때 빈 문자열을 반환해야 합니다", () => {
      const result = module.replaceFromTo("", "a", "b");
      expect(result).toBe("");
    });
  });
});
