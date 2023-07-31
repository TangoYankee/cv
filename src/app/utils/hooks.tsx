import { useMediaQuery } from "../components/ui";
import { SIMPLE_SCREEN_ORIENTATION } from "../types";

export const useScreenPortraitQuery = () =>
  useMediaQuery(`(orientation: ${SIMPLE_SCREEN_ORIENTATION.PORTRAIT})`);
