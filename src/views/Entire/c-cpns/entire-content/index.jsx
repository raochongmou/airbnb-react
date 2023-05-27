import React, { memo } from "react";
import { EntireContentWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireContent = memo(() => {
  const { roomList, total, isLoading } = useSelector(state => ({
    roomList: state.entire.roomList,
    total: state.entire.total,
    isLoading: state.entire.isLoading
  }), shallowEqual);
  return <EntireContentWrapper>
    <h2 className="entire-content-title">{total}处住所</h2>
    <div className="entire-content">
      {
        roomList?.map(item => {
          return (
            <RoomItem itemData={item} key={item._id} roomWidth="20%"/>
          )
        })
      }
    </div>
    {isLoading && <div className="entire-content-loading"></div>}
  </EntireContentWrapper>;
});

export default EntireContent;
