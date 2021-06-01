import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import covidDataSlice from "../features/covidData/covidDataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    covid: covidDataSlice,
  },
});
