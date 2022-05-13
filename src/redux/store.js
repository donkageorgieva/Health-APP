import { configureStore } from "@reduxjs/toolkit";
import { healthReducer } from "./reducers/health-status-reducer";
const store = configureStore({
  reducer: {
    health: healthReducer,
  },
});

export default store;
