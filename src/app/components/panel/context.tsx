import { createContext } from "react";

export type PanelCtxType = {
  startResizingPanel: () => void;
  resetPanelHeight: () => void;
};

export const PanelCtx = createContext<PanelCtxType>({
  startResizingPanel: () => {},
  resetPanelHeight: () => {},
});
