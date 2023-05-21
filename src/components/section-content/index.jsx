import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "@/components/room-item";
import { SectionContentWrapper } from "./style";

const SectionContent = memo(props => {
  const { roomList } = props;
  console.log("roomList", roomList);
  console.log("props", props);

  return (
    <SectionContentWrapper>
      {roomList?.slice(0, 8).map(item => {
        return <RoomItem itemData={item} key={item.id} />;
      })}
    </SectionContentWrapper>
  );
});

SectionContent.propTypes = {
  roomList: PropTypes.array
};

export default SectionContent;
