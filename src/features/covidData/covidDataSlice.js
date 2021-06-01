import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  latestData: {},
  loading: false,
  allData: [],
};

export const dataLoadAsync = createAsyncThunk(
  "covid/latestCovidData",
  async () => {
    const response = await axios.get("https://corona.lmao.ninja/v2/all");
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
const covidDataSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    allCountriesData: (state, action) => {
      state.allData = action.payload;
    },
    // latestCovidData: (state, action) => {
    //   state.latestData = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataLoadAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(dataLoadAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.latestData = action.payload;
      });
  },
});

const { allCountriesData } = covidDataSlice.actions;

export const getAllData = () => async (dispatch) => {
  const response = await axios.get("https://corona.lmao.ninja/v2/countries");
  dispatch(allCountriesData(response.data));
};
// export const getLatestCovidData = () => async (dispatch) => {
//   const response = await axios.get("https://corona.lmao.ninja/v2/all");
//   dispatch(latestCovidData(response.data));
// };
export default covidDataSlice.reducer;
