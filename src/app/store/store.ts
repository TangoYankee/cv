import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface GeoState {
    hover: boolean;
}

const initialState: GeoState = {
    hover: false,
}

export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    setGeo(state, action) {
      state.hover = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.info("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.geo,
      };
    },
  },
});

export const makeStore = () =>
  configureStore({
    reducer: {
      [geoSlice.name]: geoSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);
