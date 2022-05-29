import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "health/fetchRecipes",
  async (stats) => {
    return axios
      .get(
        `https://api.edamam.com/api/recipes/v2?app_id=${
          process.env.REACT_APP_ID
        }&app_key=${process.env.REACT_APP_API_KEY}&type=public&q=${
          stats.query ? stats.query : "recipe"
        }&mealType=${stats.mealType}&calories=${stats.calories}&random=true${stats.health}`,
        stats
      )
      .then((response) => response.data)
      .catch((err) => err);
  }
);