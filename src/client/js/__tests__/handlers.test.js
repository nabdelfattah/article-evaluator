import { getPolarity } from "../handlers.js"; // Adjust the import path as needed

describe("getPolarity", () => {
  test("returns 'strong positive' for 'P+'", () => {
    expect(getPolarity("P+")).toBe("strong positive");
  });

  test("returns 'positive' for 'P'", () => {
    expect(getPolarity("P")).toBe("positive");
  });

  test("returns 'neutral' for 'NEU'", () => {
    expect(getPolarity("NEU")).toBe("neutral");
  });

  test("returns 'negative' for 'N'", () => {
    expect(getPolarity("N")).toBe("negative");
  });

  test("returns 'strong negative' for 'N+'", () => {
    expect(getPolarity("N+")).toBe("strong negative");
  });

  test("returns 'without polarity' for 'NONE'", () => {
    expect(getPolarity("NONE")).toBe("without polarity");
  });

  test("returns undefined for an invalid symbol", () => {
    expect(getPolarity("INVALID")).toBeUndefined();
  });

  test("returns undefined for undefined input", () => {
    expect(getPolarity()).toBeUndefined();
  });

  test("returns undefined for null input", () => {
    expect(getPolarity(null)).toBeUndefined();
  });
});
