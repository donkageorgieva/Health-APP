import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCalories = createAsyncThunk(
  "health/fetchCalories",
  async (stats) => {
    return axios
      .get(
        `https://health-fitness-api.herokuapp.com/calories?weight=${stats.weight}&height=${stats.height}&activity=${stats.activity}&gender=${stats.gender}&age=${stats.age}`,
        stats
      )
      .then((response) => response.data)
      .catch((err) => err);
  }
);
