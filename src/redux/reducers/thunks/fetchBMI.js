import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBMI = createAsyncThunk("health/fetchBMI", async (stats) => {
  return axios
    .get(
      `https://health-fitness-api.herokuapp.com/bmi?weight=${stats.weight}&height=${stats.height}`,
      stats
    )
    .then((response) => response.data)
    .catch((err) => err);
});
