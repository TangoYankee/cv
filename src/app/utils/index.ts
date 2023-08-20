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
