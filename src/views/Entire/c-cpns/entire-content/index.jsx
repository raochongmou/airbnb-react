import React, { memo, useCallback } from "react";
import { EntireContentWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

const EntireContent = memo(() => {
  const { roomList, total, isLoading } = useSelector(state => ({
    roomList: state.entire.roomList,
    total: state.entire.total,
    isLoading: state.entire.isLoading
  }), shallowEqual);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomItemClick = useCallback((item) => {
    dispatch(changeDetailInfoAction(item));
    navigate("/detail");
  })
  return <EntireContentWrapper>
    <h2 className="entire-content-title">{total}处住所</h2>
    <div className="entire-content">
      {
        roomList?.map(item => {
          return (
            <RoomItem itemData={item} key={item._id} roomWidth="20%" roomItemClick={(item) => roomItemClick(item)}/>
          )
        })
      }
    </div>
    {isLoading && <div className="entire-content-loading"></div>}
  </EntireContentWrapper>;
});

export default EntireContent;
