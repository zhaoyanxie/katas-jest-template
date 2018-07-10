const titleCase = require("../src/titleCase");

test("Should return the first characters of all words capitalised if there is no minor words ", () => {
  expect(titleCase("the quick brown fox")).toBe("The Quick Brown Fox");
});

test("Should return the first characters of all words capitalised if there is an inclusion of minor words ", () => {
  const testString1 = "a clash of KINGS";
  const minorWords1 = "a an the of";
  const testString2 = "THE WIND IN THE WILLOWS";
  const minorWords2 = 'The In';
  expect(titleCase(testString1, minorWords1)).toBe("A Clash of Kings");
  expect(titleCase(testString2, minorWords2)).toBe("The Wind in the Willows");
});

test("Returns empty string for empty input", () => {
  expect(titleCase("")).toBe("");
});