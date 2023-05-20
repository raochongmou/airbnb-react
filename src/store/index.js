import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./modules/dashboard";
import { entireReducer } from "./modules/entire";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    entire: entireReducer
  }
});

export default store;
