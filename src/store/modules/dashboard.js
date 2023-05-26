import {
  getDiscount,
  getGoodPrice,
  getHighScore,
  getHotRecommend,
  getLongfor,
  getPlus
} from "@/servers/dashboard";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDashBoardDataAction = createAsyncThunk(
  "fetchDashBoardDataAction1",
  (payload, { dispatch }) => {
    getGoodPrice().then(res => {
      dispatch(changeGoodPriceAction(res));
    });
    getHighScore().then(res => {
      dispatch(changeHighScoreAction(res));
    });
    getDiscount().then(res => {
      dispatch(changeDiscountAction(res));
    });
    getHotRecommend().then(res => {
      dispatch(changeHotRecommendAction(res));
    });
    getLongfor().then(res => {
      dispatch(changeLongforAction(res));
    });
    getPlus().then(res => {
      dispatch(changePlusAction(res));
    });
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusAction(state, { payload }) {
      state.plusInfo = payload;
    }
  }
  // 方式一: 计算属性调用  类似promise的三种状态
  // extraReducers: {
  //   [fetchDashBoardDataAction.fulfilled](state, { payload }) {
  //     console.log("payload", payload);
  //     state.goodPriceInfo = payload;
  //   }
  // }
  // 方式二: 链式调用
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchDashBoardDataAction.fulfilled, (state, { payload }) => {
  //       console.log("goodPriceInfo", payload);
  //       state.goodPriceInfo = payload;
  //     })
  // }
});

export const {
  changeGoodPriceAction,
  changeHighScoreAction,
  changeDiscountAction,
  changeHotRecommendAction,
  changeLongforHotRecommendAction,
  changeLongforAction,
  changePlusAction
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
