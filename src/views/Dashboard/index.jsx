import React, { memo, useEffect } from "react";
import { DashboardWrapper } from "./style";
import DashboardBanner from "./c-cpns/dashboard-banner";

import {
  fetchDashBoardDataAction,
  fetchDashBoardDataListAction
} from "@/store/modules/dashboard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

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
        <h2>
          标题：{goodPriceInfo?.title}
        </h2>
        {goodPriceInfo?.list?.map(item => {
          return (
            <li key={item.id}>
              {item.name}
            </li>
          );
        })}
      </div>
    </DashboardWrapper>
  );
});

export default Dashboard;
