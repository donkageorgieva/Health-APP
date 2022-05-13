import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";

const initialState = {
  bmi: {
    value: null,
    bmiRange: "",
    isLoading: false,
    error: false,
  },
  calorieNeeds: {
    weightLoss: null,
    weightGain: null,
    maintain: null,
  },
  calorieGoal: null,
  recipes: [],
};

export const fetchBMI = createAsyncThunk("health/fetchBMI", async (stats) => {
  return axios
    .post("http://localhost:8080/bmi", stats)
    .then((response) => response.data);
});
const healthSlice = createSlice({
  name: "health",
  initialState,
  reducers: {
    setBMI(state, actions) {
      state.bmi = actions.payload.bmi;
      console.log("setting bmi with", actions.payload.bmi);
    },
    setCalorieNeeds(state, actions) {
      state.calorieNeeds = actions.payload.calorieNeeds;
    },
    setCalorieGoal(state, actions) {
      switch (actions.payload.type) {
        case "loose":
          state.calorieGoal = state.calorieNeeds.weightLoss;
          break;
        case "gain":
          state.calorieGoal = state.calorieNeeds.weightGain;
          break;
        case "maintain":
          state.calorieGoal = state.calorieNeeds.maintain;
          break;
        default:
          if (state.bmi.bmiRange.toLowerCase() === "healthy") {
            state.calorieGoal = state.calorieNeeds.maintain;
          } else if (state.bmi.bmiRange.toLowerCase() === "underweight") {
            state.calorieGoal = state.calorieNeeds.weightGain;
          } else if (state.bmi.bmiRange.toLowerCase() === "overweight") {
            state.calorieGoal = state.calorieNeeds.weightLoss;
          }
          break;
      }
    },
  },
  extraReducers: {
    [fetchBMI.pending]: (state, aciton) => {
      state.bmi.isLoading = true;
      console.log(aciton.payload, "pending");
    },
    [fetchBMI.fulfilled]: (state, aciton) => {
      state.bmi.isLoading = false;
      state.bmi.error = false;
      console.log(aciton.payload, "fufilled");
    },
    [fetchBMI.rejected]: (state, aciton) => {
      state.bmi.error = true;
      state.bmi.isLoading = false;
      console.log(aciton.payload, "error");
    },
  },
});

export const healthActions = healthSlice.actions;
export default healthSlice.reducer;
