import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";
import { Rating } from "@mui/material";

const RoomItem = memo(props => {
  const { itemData } = props;
  return (
    <RoomItemWrapper verify-color={itemData.verify_info.text_color}>
      <div className="inner">
        <div className="cover">
          <img src={itemData?.picture_url} />
        </div>
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
