import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headConfigs: {},
  isFixed: false
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeHeaderConfigAction(state, { paylaod }) {
      state.headConfigs = paylaod;
    },
    changeIsFixedAction(state, { payload }) {
      state.isFixed = payload;
    }
  }
});

export const {
  changeHeaderConfigAction,
  changeIsFixedAction
} = mainSlice.actions;

export default mainSlice.reducer;
