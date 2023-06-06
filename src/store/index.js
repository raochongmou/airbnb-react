import dashboardReducer from "./modules/dashboard";
import { configureStore } from "@reduxjs/toolkit";
import { entireReducer } from "./modules/entire";
import detailReducer from "./modules/detail";
import mainReducer from "./modules/main";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer
  }
});

export default store;
