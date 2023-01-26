import { arrayLength, arrayPush } from "./functions";

describe("Given an array", () => {
  describe("When the array is [1, 2, 3]", () => {
    test("Then the result should be 3", () => {
      const a = [1, 2, 3];
      const result = arrayLength(a);
      const expected = 3;
      expect(result).toBe(expected);
    });
  });
});

describe("Given and array and a number", () => {
  describe("When the number are 2 and the array [1, 2] ", () => {
    test("Then the result should be 3", () => {
      const a = [1, 2];
      const b = 2;
      const result = arrayPush(a, b);
      const expected = 3;
      expect(result).toBe(expected);
    });
  });
});
