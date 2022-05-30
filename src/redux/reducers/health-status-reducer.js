import { createSlice } from "@reduxjs/toolkit";
import { fetchBMI } from "./thunks/fetchBMI";
import { fetchCalories } from "./thunks/fetchCalories";
import { fetchRecipes } from "./thunks/fetchRecipes";
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
      {
        value: null,
        name: "Weight Gain",
        id: "highCalories",
      },
    ],
    isLoading: false,
    error: false,
  },
  nutrition: {
    isLoading: false,
    error: false,
    recipes: [],
    calorieGoal: null,
  },
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
      state.calories.isLoading = false;
    },
    [fetchCalories.rejected]: (state, aciton) => {},
    [fetchRecipes.pending]: (state, action) => {},
    [fetchRecipes.fulfilled]: (state, action) => {
      state.nutrition.isLoading = false;
      state.nutrition.recipes = action.payload.hits.map((hit) => {
        return {
          calories: hit.recipe.calories,
          healthLabels: hit.recipe.healthLabels,
          cautions: hit.recipe.cautions,
          ingredientLines: hit.recipe.ingredientLines,
          ingredients: hit.recipe.ingredients,
          mealType: hit.recipe.mealType,
          label: hit.recipe.label,
          image: hit.recipe.images.LARGE,
          weight: hit.recipe.totalWeight.toFixed(2),
        };
      });
      console.log(action.payload);
    },
    [fetchRecipes.rejected]: (state, action) => {},
  },
});

export const healthActions = healthSlice.actions;
export const healthReducer = healthSlice.reducer;
