import React, { memo, useEffect } from "react";
import { DashboardWrapper } from "./style";
import DashboardBanner from "./c-cpns/dashboard-banner";

import {
  fetchDashBoardDataAction,
  fetchDashBoardDataListAction
} from "@/store/modules/dashboard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SectionHeader from "@/components/section-header";
import SectionContent from "@/components/section-content";

const Dashboard = memo(() => {
  const dispatch = useDispatch();
  const { goodPriceInfo } = useSelector(
    state => ({
      goodPriceInfo: state.dashboard.goodPriceInfo
    }),
    shallowEqual
  );
  useEffect(
    () => {
      dispatch(fetchDashBoardDataAction("xxxx"));
      dispatch(fetchDashBoardDataListAction("yyyy"));
    },
    [dispatch]
  );
  return (
    <DashboardWrapper>
      <DashboardBanner />
      <div className="content">
        <div className="section-title">
          <SectionHeader title={goodPriceInfo?.title} subTitle={goodPriceInfo?.sub_title}/>
          <SectionContent roomList={goodPriceInfo?.list} />
        </div>
      </div>
    </DashboardWrapper>
  );
});

export default Dashboard;
