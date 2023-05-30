import dashboardReducer from "./modules/dashboard";
import { configureStore } from "@reduxjs/toolkit";
import { entireReducer } from "./modules/entire";
import detailReducer from "./modules/detail";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    entire: entireReducer,
    detail: detailReducer
  }
});

export default store;
