import { getGoodPrice } from "@/servers/dashboard";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDashBoardDataAction = createAsyncThunk(
  "fetchDashBoardDataAction1",
  async (paload, store) => {
    const res = await getGoodPrice();
    console.log("fetchDashBoardDataAction", res);
    return res;
  }
);
export const fetchDashBoardDataListAction = createAsyncThunk(
  "fetchDashBoardDataAction2",
  async (paload, store) => {
    const res = await getGoodPrice();
    return res.list;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    goodPriceInfo: {},
    goodPriceListInfo: {}
  },
  reducers: {},
  // 方式一: 计算属性调用  类似promise的三种状态
  // extraReducers: {
  //   [fetchDashBoardDataAction.fulfilled](state, { payload }) {
  //     console.log("payload", payload);
  //     state.goodPriceInfo = payload;
  //   }
  // }
  // 方式二: 链式调用
  extraReducers: builder => {
    builder
      .addCase(fetchDashBoardDataAction.fulfilled, (state, { payload }) => {
        console.log("goodPriceInfo", payload);
        state.goodPriceInfo = payload;
      })
      .addCase(fetchDashBoardDataListAction.fulfilled, (state, { payload }) => {
        console.log("goodPriceListInfo", payload);
        state.goodPriceListInfo = payload;
      });
  }
});

export default dashboardSlice.reducer;
