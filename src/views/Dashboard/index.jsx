import React, { memo, useEffect } from "react";
import { DashboardWrapper } from "./style";
import DashboardBanner from "./c-cpns/dashboard-banner";

import { fetchDashBoardDataAction } from "@/store/modules/dashboard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import DashboardSction from "./c-cpns/dashboard-section";
import DashboardTabs from "./c-cpns/dashboard-tabs";

const Dashboard = memo(() => {
  const dispatch = useDispatch();
  const { 
    goodPriceInfo, 
    highScoreInfo, 
    discountInfo, 
    recommendInfo 
  } = useSelector(
    state => ({
      goodPriceInfo: state.dashboard.goodPriceInfo,
      highScoreInfo: state.dashboard.highScoreInfo,
      discountInfo: state.dashboard.discountInfo,
      recommendInfo: state.dashboard.recommendInfo,
    }),
    shallowEqual
  );
  useEffect(
    () => {
      dispatch(fetchDashBoardDataAction("xxxx"));
    },
    [dispatch]
  );
  return (
    <DashboardWrapper>
      <DashboardBanner />
      <div className="content">
        {discountInfo?.dest_address?.length &&
          <DashboardTabs dataInfo={discountInfo} />}
        {recommendInfo?.dest_address?.length &&
          <DashboardTabs dataInfo={recommendInfo} />}
        <DashboardSction dataInfo={goodPriceInfo} />
        <DashboardSction dataInfo={highScoreInfo} />
      </div>
    </DashboardWrapper>
  );
});

export default Dashboard;
