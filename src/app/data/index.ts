import { FeatureCollection, Point } from "@/types";
import {
  LOCATION,
  ORGANIZATION,
  Position,
  RESPONSIBILITY,
  SOFTWARE_TOOL,
} from "./types";
import { MONTH, monthYearTimeString } from "../utils";

export const placeNames: Record<number, string> = {
  0: "Equitable",
  1: "Stratacache",
  2: "Oakland City Hall",
  3: "Travis AFB",
  4: "Northwestern University",
  5: "Binghamton University",
  6: "CUNY Hunter",
};

export const positions: Array<Position> = [
  {
    id: 0,
    title: "Front End Developer",
    startDate: monthYearTimeString(MONTH.SEP, "2020"),
    endDate: monthYearTimeString(MONTH.JUL, "2022"),
    achievements: [
      "Developed web-based application to help security analysts model complex systems",
      "Assisted in converting model renderer from object-oriented to entity-component-system architecture, increasing performance and maintainability",
    ],
    softwareTools: [SOFTWARE_TOOL.TS, SOFTWARE_TOOL.REACT, SOFTWARE_TOOL.PIXI],
    responsibilities: [RESPONSIBILITY.FRONT_END],
    organization: ORGANIZATION.TENET3,
    locations: [
      {
        id: 1,
        title: LOCATION.STRATACACHE,
        city: "Dayton, OH",
      },
    ],
    awards: [],
  },
  {
    id: 1,
    title: "Full Stack Contributor",
    startDate: monthYearTimeString(MONTH.APR, "2018"),
    endDate: monthYearTimeString(MONTH.APR, "2022"),
    achievements: [
      "Built web application for citizen scientist group to manage air quality data",
      "Designed & implemented geospatial features, allowing users to visualize data they collected throughout their neighborhood",
    ],
    softwareTools: [
      SOFTWARE_TOOL.JS,
      SOFTWARE_TOOL.REACT,
      SOFTWARE_TOOL.DJANGO_REST,
      SOFTWARE_TOOL.POSTGIS,
      SOFTWARE_TOOL.MAPBOX,
      SOFTWARE_TOOL.DOCKER,
    ],
    responsibilities: [
      RESPONSIBILITY.FRONT_END,
      RESPONSIBILITY.BACK_END,
      RESPONSIBILITY.FULL_STACK,
      RESPONSIBILITY.PROJECT_MANAGER,
    ],
    organization: ORGANIZATION.CFA,
    locations: [
      {
        id: 2,
        title: LOCATION.OAKLAND_CITY_HALL,
        city: "Oakland, CA",
      },
    ],
    awards: [],
  },
];

export const locationsIndex = positions.reduce(
  (
    locationsRecord: Array<Set<number> | undefined>,
    { id: positionId, locations },
  ) => {
    locations.forEach(({ id: locationId }) => {
      let locationRecord = locationsRecord[locationId];
      if (locationRecord === undefined) {
        locationRecord = new Set([positionId]);
      } else {
        locationRecord.add(positionId);
      }
      locationsRecord[locationId] = locationRecord;
    });
    return locationsRecord;
  },
  [],
);

export const locationPoints: FeatureCollection<Point, { id: number }> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: 1,
      },
      geometry: {
        coordinates: [-84.1917, 39.7609],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        id: 2,
      },
      geometry: {
        coordinates: [-122.2725, 37.8054],
        type: "Point",
      },
    },
  ],
};
