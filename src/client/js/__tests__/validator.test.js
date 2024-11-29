import { isValidURL } from "../validator.js";

test("returns true for a valid URL", () => {
  expect(isValidURL("https://example.com")).toBe(true);
});

test("returns false for an invalid URL", () => {
  expect(isValidURL("invalid-url")).toBe(false);
});