"use client";

import { useReducer } from "react";
import GeoMap from "./geoMap";
import { geoReducer, initialGeoState } from "./state/reducer";
import { geoActions } from "./state/actions";
import { GeoCtx } from "./state/context";
import { Footer } from "./components/footer";
import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header/header";

export default function App() {
  const [geoState, geoDispatch] = useReducer(geoReducer, initialGeoState);
  const geoActionsDispatch = geoActions(geoDispatch);

  return (
    <main>
      <GeoCtx.Provider value={{ geoState, geoActionsDispatch }}>
        <Header />
        <GeoMap />
        <Sidebar />
        <Footer />
      </GeoCtx.Provider>
    </main>
  );
}
