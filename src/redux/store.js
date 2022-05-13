import { configureStore } from "@reduxjs/toolkit";
import healthStatusReducer from "./reducers/health-status-reducer";
const store = configureStore({
  reducer: {
    health: healthStatusReducer,
  },
});

export default store;
