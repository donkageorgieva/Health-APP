import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchConvert = createAsyncThunk(
  "health/fetchConvert",
  async (stats) => {
    return axios
      .get(
        `https://convert-metrics-rest-api.herokuapp.com/to-${stats.to}/${stats.value}`,
        stats
      )
      .then((response) => response.data)
      .catch((err) => err);
  }
);
