export const places: Array<number> = [0, 1];

export const placeNames: Record<number, string> = {
  0: "Equitable",
  1: "Battery",
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
        coordinates: [-74.0163, 40.7032],
        type: "Point",
      },
    },
  ],
};
