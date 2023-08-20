import { describe, it, expect } from "@jest/globals";
import { MONTH, monthYearTimeString } from ".";

describe("monthYearTimeString", () => {
  it("creates a date on the the first day of given month and year", () => {
    const yr = "1998";
    const monthYear = monthYearTimeString(MONTH.APR, yr);
    expect(monthYear).toBeInstanceOf(Date);
    expect(monthYear.getFullYear()).toEqual(parseInt(yr));
    expect(monthYear.getMonth()).toEqual(3);
  });
});
