export const places: Array<number> = [0, 1, 2, 3, 4, 5, 6];

export const placeNames: Record<number, string> = {
  0: "Equitable",
  1: "Stratacache",
  2: "Oakland City Hall",
  3: "Travis AFB",
  4: "Northwestern University",
  5: "Binghamton University",
  6: "CUNY Hunter",
};

export const placePoints = {
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
