import PropTypes from "prop-types";
import React, { memo } from "react";
import { DashboardExtraWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import Scroll from "@/base-ui/scroll";

const DashboardExtra = memo(props => {
  const { dataInfo } = props;
  return (
    <DashboardExtraWrapper>
      <SectionHeader title={dataInfo.title} subTitle={dataInfo.subtitle} />
      <div className="longfor-list">
        <Scroll>
          {dataInfo.list.map(item => {
            return (
              <LongforItem key={item.city} itemData={item} itemWidth="20%" />
            );
          })}
        </Scroll>
      </div>
    </DashboardExtraWrapper>
  );
});

DashboardExtra.propTypes = {
  dataInfo: PropTypes.object
};

export default DashboardExtra;
