const getMiddle = require("../src/getMiddle");

test("should return the middle character for odd string length", () => {
  expect(getMiddle("testing")).toBe("t");
  expect(getMiddle("A")).toBe("A");
});

test("should return the middle character for even string length", () => {
  expect(getMiddle("test")).toBe("es");
  expect(getMiddle("middle")).toBe("dd");
});
