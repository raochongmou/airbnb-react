import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "@/components/room-item";
import { SectionContentWrapper } from "./style";

const SectionContent = memo(props => {
  const { roomList, roomWidth } = props;

  return (
    <SectionContentWrapper>
      {roomList?.slice(0, 8).map(item => {
        return <RoomItem roomWidth={roomWidth} itemData={item} key={item.id} />;
      })}
    </SectionContentWrapper>
  );
});

SectionContent.propTypes = {
  roomList: PropTypes.array
};

export default SectionContent;
