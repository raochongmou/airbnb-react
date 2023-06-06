import React, { memo, useEffect } from "react";
import { DashboardWrapper } from "./style";
import DashboardBanner from "./c-cpns/dashboard-banner";

import { fetchDashBoardDataAction } from "@/store/modules/dashboard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import DashboardSction from "./c-cpns/dashboard-section";
import DashboardTabs from "./c-cpns/dashboard-tabs";
import DashboardExtra from "./c-cpns/dashboard-extra";
import { isObject } from "@/utils";
import DashboardPlus from "./c-cpns/dashboard-plus";
import {
  // changeHeaderConfigAction
  changeIsFixedAction
} from "@/store/modules/main";

const Dashboard = memo(() => {
  const dispatch = useDispatch();
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector(
    state => ({
      goodPriceInfo: state.dashboard.goodPriceInfo,
      highScoreInfo: state.dashboard.highScoreInfo,
      discountInfo: state.dashboard.discountInfo,
      recommendInfo: state.dashboard.recommendInfo,
      longforInfo: state.dashboard.longforInfo,
      plusInfo: state.dashboard.plusInfo
    }),
    shallowEqual
  );
  useEffect(
    () => {
      dispatch(fetchDashBoardDataAction("xxxx"));
      // dispatch(changeHeaderConfigAction({ isFixed: true }));
      dispatch(changeIsFixedAction(true));
    },
    [dispatch]
  );
  return (
    <DashboardWrapper>
      <DashboardBanner />
      <div className="content">
        {isObject(longforInfo) && <DashboardExtra dataInfo={longforInfo} />}
        {isObject(discountInfo) && <DashboardTabs dataInfo={discountInfo} />}
        {isObject(recommendInfo) && <DashboardTabs dataInfo={recommendInfo} />}
        {isObject(goodPriceInfo) &&
          <DashboardSction dataInfo={goodPriceInfo} />}
        {isObject(highScoreInfo) &&
          <DashboardSction dataInfo={highScoreInfo} />}
        {isObject(plusInfo) && <DashboardPlus dataInfo={plusInfo} />}
      </div>
    </DashboardWrapper>
  );
});

export default Dashboard;
