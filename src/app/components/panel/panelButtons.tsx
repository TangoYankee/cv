import React, { useContext } from "react";
import { GeoCtx } from "@/app/state/context";
import { PORTRAIT_VIEW } from "@/app/types";
import {
  AnglesDownBtn,
  AnglesUpBtn,
  GripLinesBtn,
  IconButtonProps,
} from "../ui";
import { AngleDownBtn, AngleUpBtn } from "../ui/buttons";

export function MapViewBtn(props: IconButtonProps) {
  const {
    geoState: { portraitView },
    geoActionsDispatch: { updatePortraitView },
  } = useContext(GeoCtx);

  return (
    <AnglesDownBtn
      onClick={() => updatePortraitView(PORTRAIT_VIEW.MAP)}
      disabled={PORTRAIT_VIEW.MAP === portraitView}
      size="small"
      {...props}
    />
  );
}

export function PanelViewBtn(props: IconButtonProps) {
  const {
    geoState: { portraitView },
    geoActionsDispatch: { updatePortraitView },
  } = useContext(GeoCtx);

  return (
    <AnglesUpBtn
      onClick={() => updatePortraitView(PORTRAIT_VIEW.PANEL)}
      disabled={PORTRAIT_VIEW.PANEL === portraitView}
      size="small"
      {...props}
    />
  );
}

export function SplitViewBtn({ ...props }: IconButtonProps) {
  const {
    geoState: { portraitView },
    geoActionsDispatch: { updatePortraitView },
  } = useContext(GeoCtx);

  switch (portraitView) {
    case PORTRAIT_VIEW.MAP: {
      return (
        <AngleUpBtn
          size="small"
          onClick={() => updatePortraitView(PORTRAIT_VIEW.SPLIT)}
          {...props}
        />
      );
    }
    case PORTRAIT_VIEW.SPLIT: {
      return (
        <GripLinesBtn
          size="small"
          disabled={PORTRAIT_VIEW.SPLIT === portraitView}
          {...props}
        />
      );
    }
    case PORTRAIT_VIEW.PANEL: {
      return (
        <AngleDownBtn
          size="small"
          onClick={() => updatePortraitView(PORTRAIT_VIEW.SPLIT)}
          {...props}
        />
      );
    }
    default: {
      return <GripLinesBtn size="small" {...props} />;
    }
  }
}
