import { createSlice } from "@reduxjs/toolkit";
import { fetchBMI } from "./thunks/fetchBMI";
import { fetchCalories } from "./thunks/fetchCalories";
const initialState = {
  bmi: {
    value: null,
    bmiRange: "",
    isLoading: false,
    error: false,
  },
  calories: {
    calorieNeeds: [
      {
        value: null,
        name: "Fast Weightloss",
        id: "superLowCalories",
      },
      {
        id: "lowCalories",
        value: null,
        name: "Steady Weightloss",
      },

      {
        value: null,
        name: "Maintain Current Weight",
        id: "moderateCalories",
      },
      { value: null, name: "Weight Gain", id: "highCalories" },
    ],
    isLoading: false,
    error: false,
  },
  calorieGoal: null,
  recipes: [],
};

const healthSlice = createSlice({
  name: "health",
  initialState,
  reducers: {
    setBMI(state, actions) {
      state.bmi = actions.payload.bmi;
      console.log("setting bmi with", actions.payload.bmi);
    },
    setcalories(state, actions) {
      state.calories = actions.payload.calories;
    },
    setCalorieGoal(state, actions) {
      switch (actions.payload.type) {
        case "loose":
          state.calorieGoal = state.calories.weightLoss;
          break;
        case "gain":
          state.calorieGoal = state.calories.weightGain;
          break;
        case "maintain":
          state.calorieGoal = state.calories.maintain;
          break;
        default:
          if (state.bmi.bmiRange.toLowerCase() === "healthy") {
            state.calorieGoal = state.calories.maintain;
          } else if (state.bmi.bmiRange.toLowerCase() === "underweight") {
            state.calorieGoal = state.calories.weightGain;
          } else if (state.bmi.bmiRange.toLowerCase() === "overweight") {
            state.calorieGoal = state.calories.weightLoss;
          }
          break;
      }
    },
  },
  extraReducers: {
    [fetchBMI.pending]: (state, aciton) => {
      state.bmi.isLoading = true;
    },
    [fetchBMI.fulfilled]: (state, aciton) => {
      state.bmi.isLoading = false;
      state.bmi.error = false;
      state.bmi.bmiRange = aciton.payload.bmiRange;
      state.bmi.value = aciton.payload.bmi;
      console.log("fufilled");
    },
    [fetchBMI.rejected]: (state, aciton) => {
      state.bmi.error = true;
      state.bmi.isLoading = false;
      console.log(aciton.payload, "error");
    },
    [fetchCalories.pending]: (state, aciton) => {
      state.calories.isLoading = true;
    },
    [fetchCalories.fulfilled]: (state, action) => {
      for (const key in action.payload) {
        const stateIndex = state.calories.calorieNeeds.findIndex(
          (need) => need.id.trim() === key
        );

        state.calories.calorieNeeds[stateIndex].value = action.payload[key];
      }
    },
    [fetchCalories.rejected]: (state, aciton) => {},
  },
});

export const healthActions = healthSlice.actions;
export const healthReducer = healthSlice.reducer;
