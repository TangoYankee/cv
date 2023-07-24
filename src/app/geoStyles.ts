import { RGBColor } from "maplibre-gl";
import { placePlacements, placeTypes } from "./data";
import { ActivePointId } from "./state/types";
import { PLACE_FILL_CATEGORY } from "./types";

const voidColor: RGBColor = [0, 0, 0, 255];
const defaultOutlineColor: RGBColor = [25, 118, 210, 255];
const activeOutlineColor: RGBColor = [123, 31, 162, 255];

export const getPointOutlineColor = (
  targetId: number | undefined,
  activeId: ActivePointId,
): RGBColor => {
  if (targetId === undefined) return voidColor;
  if (activeId === null) return defaultOutlineColor;
  if (targetId === activeId) return activeOutlineColor;
  return defaultOutlineColor;
};

export const getPlaceTypeFill = (placeId: number | undefined): RGBColor => {
  if (placeId === undefined) return voidColor;
  const placeType = placeTypes[placeId];
  if (placeType === undefined) return voidColor;
  switch (placeType) {
    case "building": {
      return [0, 0, 255, 255];
    }
    case "park": {
      return [0, 255, 0, 255];
    }
    default: {
      return voidColor;
    }
  }
};

export const getPlacePlacementFill = (
  placeId: number | undefined,
): RGBColor => {
  if (placeId === undefined) return voidColor;
  const placePlacement = placePlacements[placeId];
  if (placePlacement === undefined) return voidColor;
  switch (placePlacement) {
    case "inland": {
      return [255, 0, 0, 255];
    }
    case "waterfront": {
      return [0, 0, 255, 255];
    }
    default: {
      return voidColor;
    }
  }
};

export const PLACE_FILL_OPERATION = {
  [PLACE_FILL_CATEGORY.TYPE]: getPlaceTypeFill,
  [PLACE_FILL_CATEGORY.PLACEMENT]: getPlacePlacementFill,
};
