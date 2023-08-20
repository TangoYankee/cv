import { RGBColor } from "maplibre-gl";
import { ActiveEntityId } from "./state/types";

const voidColor: RGBColor = [0, 0, 0, 255];
const defaultOutlineColor: RGBColor = [25, 118, 210, 255];
const activeOutlineColor: RGBColor = [123, 31, 162, 255];

export const getPointOutlineColor = (
  targetId: number | undefined,
  activeId: ActiveEntityId,
  highlightedIds: Array<number>,
): RGBColor => {
  if (targetId === undefined) return voidColor;
  if (targetId === activeId) return activeOutlineColor;
  if (highlightedIds.includes(targetId)) return activeOutlineColor;
  return defaultOutlineColor;
};
