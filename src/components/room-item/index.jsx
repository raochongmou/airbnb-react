import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { RoomItemWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from 'antd';
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import Indicator from "@/base-ui/indicator";

const RoomItem = memo(props => {
  const { itemData, roomWidth } = props;
  const carouselRef = useRef();
  const [selectIdx, setSelectIdx] = useState(0);
  const itemLength = itemData?.picture_urls?.length - 1;
  function handleBtnClick(isRight) {
    isRight ? carouselRef.current.next() : carouselRef.current.prev();
    let newIdx = isRight ? selectIdx + 1 : selectIdx -1;
    if(newIdx > itemLength) newIdx = 0;
    if(newIdx < 0) newIdx = itemLength;
    setSelectIdx(newIdx);
  }
  function isActive(index) {
    return index === selectIdx ? 'active' : '';
  }
  const swipperElement = (
    <div className="swipper">
      <div className="control">
        <div className="btn left" onClick={() => handleBtnClick(false)}>
          <IconArrowLeft width="30" height="30" />
          </div>
        <div className="btn right" onClick={() => handleBtnClick(true)}>
          <IconMoreArrow width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator newIndex={selectIdx}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="doc">
                  <span key={item} className={`item ${isActive(index)}`}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel ref={carouselRef} dots={false}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className="cover" key={item}>
                <img src={item}  />
              </div> 
            )
          })
        }
      </Carousel>
    </div>
  )
  const plainElement = (
    <div className="cover">
      <img src={itemData.picture_url}  />
    </div>
  )
  return (
    <RoomItemWrapper 
    roomwidth={roomWidth??"25%"}
    verifycolor={itemData.verify_info.text_color}>
      <div className="inner">
        {itemData?.picture_urls ? swipperElement : plainElement}
        <div className="desc">
          {itemData?.verify_info?.messages.join(" . ")}
        </div>
        <div className="name">
          {itemData?.name}
        </div>
        <div className="price">
          ￥{itemData?.price}/晚
        </div>
        <div className="bottom">
          <Rating 
            name="read-only" 
            precision={0.5}
            sx={{fontSize: "10px", color: itemData.star_rating_color}} 
            value={itemData.star_rating??5} 
            readOnly 
          />
          <span className="count">{itemData?.reviews_count}</span>
          {itemData.bottom_info && <span className="extra">.{itemData?.bottom_info?.content}</span>}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object
};

export default RoomItem;
