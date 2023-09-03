import { FullYear } from "@/types";

export enum MONTH {
  JAN = "January",
  FEB = "February",
  MAR = "March",
  APR = "April",
  MAY = "May",
  JUN = "June",
  JUL = "July",
  AUG = "August",
  SEP = "September",
  OCT = "October",
  NOV = "November",
  DEC = "December",
}

export const monthYearTimeString = (month: MONTH, year: FullYear) =>
  new Date(`${month} 01, ${year} 00:00:00`);

export const oxfordCommas = (items: Array<string>): string => {
  const itemCount = items.length;
  switch (itemCount) {
    case 0: {
      return "";
    }
    case 1: {
      return items[0];
    }
    case 2: {
      return `${items[0]} and ${items[1]}`;
    }
    default: {
      return `${items
        .slice(0, -1)
        .reduce((commas, item) => commas.concat(`${item}, `), "")}and ${
        items[itemCount - 1]
      }`;
    }
  }
};
