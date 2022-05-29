import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "health/fetchRecipes",
  async (stats) => {
    return axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=5&maxCalories=${stats.maxCalories}`,
        stats
      )
      .then((response) => response.data)
      .catch((err) => err);
  }
);
