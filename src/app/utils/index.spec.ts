import { describe, it, expect } from "@jest/globals";
import { MONTH, monthYearTimeString, oxfordCommas } from ".";

describe("monthYearTimeString", () => {
  it("creates a date on the the first day of given month and year", () => {
    const yr = "1998";
    const monthYear = monthYearTimeString(MONTH.APR, yr);
    expect(monthYear).toBeInstanceOf(Date);
    expect(monthYear.getFullYear()).toEqual(parseInt(yr));
    expect(monthYear.getMonth()).toEqual(3);
  });
});

describe("oxfordCommas", () => {
  it("provides an empty string for emtpy lists", () => {
    expect(oxfordCommas([])).toEqual("");
  });

  it("provides a single item with a list of one", () => {
    expect(oxfordCommas(["Hello"])).toEqual("Hello");
  });

  it("provides a short list with list of two", () => {
    expect(oxfordCommas(["Hello", "World"])).toEqual("Hello and World");
  });

  it("provides a list of commas with three or more items", () => {
    expect(oxfordCommas(["foo", "bar", "baz"])).toEqual("foo, bar, and baz");
  });
});
