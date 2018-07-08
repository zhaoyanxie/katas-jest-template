const mostFrequent = require("../src/mostFrequent");

it("should return unique most frequent element", () => {
  const testInputArray1 = [1, 1, 2, 3];
  const testInputArray2 = [1, 1, 2, 2, 3];
  const testInputArray3 = [1, 1, 1, 2, 2, 3];
  const testInputArray4 = [1, 1, "2", "2", 3];
  const testInputArray5 = [1, 1, "1", "1", 3];
  expect(mostFrequent(testInputArray1)).toEqual(new Set([1]));
  expect(mostFrequent(testInputArray2)).toEqual(new Set([1, 2]));
  expect(mostFrequent(testInputArray3)).toEqual(new Set([1]));
  expect(mostFrequent(testInputArray4)).toEqual(new Set([1, "2"]));
  expect(mostFrequent(testInputArray5)).toEqual(new Set([1, "1"]));
});
