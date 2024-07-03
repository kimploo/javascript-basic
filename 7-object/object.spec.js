import { beforeAll } from "vitest";
import { describe, expect, it } from "vitest";

const FILE_PATH =
  process.env.NODE_ENV === "reference"
    ? "./object.reference.js"
    : "./object.js";

describe("객체 TODO", () => {
  let module;

  beforeAll(async () => {
    module = await import(FILE_PATH);
  });

  describe("setPropertyValue 함수 테스트", () => {
    it("객체의 새로운 키에 값을 설정합니다", () => {
      const obj = {};
      const key = "newKey";
      const value = "newValue";
      const result = module.setPropertyValue(obj, key, value);

      expect(result).toEqual({ newKey: "newValue" });
    });

    it("객체의 기존 키에 값을 업데이트합니다", () => {
      const obj = { existingKey: "oldValue" };
      const key = "existingKey";
      const value = "newValue";
      const result = module.setPropertyValue(obj, key, value);

      expect(result).toEqual({ existingKey: "newValue" });
    });

    it("객체가 비어있지 않은 경우 올바르게 값을 설정합니다", () => {
      const obj = { anotherKey: "anotherValue" };
      const key = "newKey";
      const value = "newValue";
      const result = module.setPropertyValue(obj, key, value);

      expect(result).toEqual({
        anotherKey: "anotherValue",
        newKey: "newValue",
      });
    });
  });

  describe("getPropertyValue 함수 테스트", () => {
    it("객체에서 존재하는 키의 값을 반환합니다", () => {
      const obj = { key1: "value1", key2: "value2" };
      const key = "key1";
      const result = module.getPropertyValue(obj, key);

      expect(result).toBe("value1");
    });

    it("객체에서 존재하지 않는 키의 값을 요청하면 undefined를 반환합니다", () => {
      const obj = { key1: "value1", key2: "value2" };
      const key = "nonExistentKey";
      const result = module.getPropertyValue(obj, key);

      expect(result).toBeUndefined();
    });

    it("객체가 비어있는 경우 undefined를 반환합니다", () => {
      const obj = {};
      const key = "anyKey";
      const result = module.getPropertyValue(obj, key);

      expect(result).toBeUndefined();
    });
  });

  describe("removeProperty 함수 테스트", () => {
    it("객체에서 존재하는 키의 속성을 제거합니다", () => {
      const obj = { key1: "value1", key2: "value2" };
      const key = "key1";
      const result = module.removeProperty(obj, key);

      expect(result).toEqual({ key2: "value2" });
    });

    it("객체에서 존재하지 않는 키의 속성을 제거해도 객체는 변경되지 않습니다", () => {
      const obj = { key1: "value1", key2: "value2" };
      const key = "nonExistentKey";
      const result = module.removeProperty(obj, key);

      expect(result).toEqual({ key1: "value1", key2: "value2" });
    });

    it("객체가 비어있는 경우 아무 속성도 제거되지 않습니다", () => {
      const obj = {};
      const key = "anyKey";
      const result = module.removeProperty(obj, key);

      expect(result).toEqual({});
    });

    it("객체에서 모든 키를 제거할 수 있습니다", () => {
      const obj = { key1: "value1" };
      const key = "key1";
      const result = module.removeProperty(obj, key);

      expect(result).toEqual({});
    });
  });

  describe("printAllProperties 함수 테스트", () => {
    it("객체의 모든 속성과 값을 올바르게 출력합니다", () => {
      const obj = { key1: "value1", key2: "value2" };
      const result = module.printAllProperties(obj);

      expect(result).toBe("key1: value1key2: value2");
    });

    it("객체가 비어있는 경우 빈 문자열을 반환합니다", () => {
      const obj = {};
      const result = module.printAllProperties(obj);

      expect(result).toBe("");
    });

    it("객체에 하나의 속성이 있는 경우 올바르게 출력합니다", () => {
      const obj = { key1: "value1" };
      const result = module.printAllProperties(obj);

      expect(result).toBe("key1: value1");
    });

    it("숫자 값을 가진 속성을 올바르게 출력합니다", () => {
      const obj = { key1: 123, key2: 456 };
      const result = module.printAllProperties(obj);

      expect(result).toBe("key1: 123key2: 456");
    });

    it("불리언 값을 가진 속성을 올바르게 출력합니다", () => {
      const obj = { key1: true, key2: false };
      const result = module.printAllProperties(obj);

      expect(result).toBe("key1: truekey2: false");
    });
  });

  describe("extend 함수 테스트", () => {
    it("obj2의 속성이 obj1에 추가됩니다", () => {
      const obj1 = { key1: "value1" };
      const obj2 = { key2: "value2" };
      const result = module.extend(obj1, obj2);

      expect(result).toEqual({ key1: "value1", key2: "value2" });
    });

    it("obj1과 obj2에 동일한 키가 있을 경우 obj1의 값이 유지됩니다", () => {
      const obj1 = { key1: "value1" };
      const obj2 = { key1: "value2", key2: "value2" };
      const result = module.extend(obj1, obj2);

      expect(result).toEqual({ key1: "value1", key2: "value2" });
    });

    it("obj2가 비어있는 경우 obj1이 변경되지 않습니다", () => {
      const obj1 = { key1: "value1" };
      const obj2 = {};
      const result = module.extend(obj1, obj2);

      expect(result).toEqual({ key1: "value1" });
    });

    it("obj1이 비어있는 경우 obj2의 모든 속성이 obj1에 추가됩니다", () => {
      const obj1 = {};
      const obj2 = { key1: "value1", key2: "value2" };
      const result = module.extend(obj1, obj2);

      expect(result).toEqual({ key1: "value1", key2: "value2" });
    });

    it("obj1과 obj2가 모두 비어있는 경우 아무 일도 일어나지 않습니다", () => {
      const obj1 = {};
      const obj2 = {};
      const result = module.extend(obj1, obj2);

      expect(result).toEqual({});
    });
  });
});
