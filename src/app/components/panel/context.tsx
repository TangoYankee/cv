import { createContext } from "react";

export type PanelCtxType = {
  startResizingPanel: () => void;
};

export const PanelCtx = createContext<PanelCtxType>({
  startResizingPanel: () => {},
});
