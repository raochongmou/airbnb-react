import PropTypes from "prop-types";
import React, { memo } from "react";
import { DashboardPlusWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import Scroll from "@/base-ui/scroll";

const DashboardPlus = memo(props => {
  const { dataInfo } = props;
  return (
    <DashboardPlusWrapper>
      <SectionHeader title={dataInfo.title} subTitle={dataInfo.subtitle} />
      <div className="room-list">
        <Scroll>
          {dataInfo.list.map(item => {
            return <RoomItem itemData={item} key={item.id} roomWidth="20%" />;
          })}
        </Scroll>
      </div>
    </DashboardPlusWrapper>
  );
});

DashboardPlus.propTypes = {
  dataInfo: PropTypes.object
};

export default DashboardPlus;
