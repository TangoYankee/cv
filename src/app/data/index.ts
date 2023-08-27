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
        id: 0,
      },
      geometry: {
        coordinates: [-74.0105, 40.7082],
        type: "Point",
      },
    },
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
    {
      type: "Feature",
      properties: {
        id: 3,
      },
      geometry: {
        coordinates: [-121.9586, 38.2552],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        id: 4,
      },
      geometry: {
        coordinates: [-87.6753, 42.0565],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        id: 5,
      },
      geometry: {
        coordinates: [-75.9694, 42.0895],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        id: 6,
      },
      geometry: {
        coordinates: [-73.9644, 40.7679],
        type: "Point",
      },
    },
  ],
};
