import { RGBColor } from "maplibre-gl";
import { placeTypes } from "./data";
import { ActivePointId } from "./state/types";

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
