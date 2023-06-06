import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforItemWrapper } from "./style";

const LongforItem = memo(props => {
  const { itemData } = props;
  return (
    <LongforItemWrapper>
      <div className="long-inner">
        <img className="long-img" src={itemData.picture_url} alt="" />
        <div className="long-bg" />
        <div className="long-city">
          {itemData.city}
        </div>
        <div className="long-price">
          均价 {itemData.price}
        </div>
      </div>
    </LongforItemWrapper>
  );
});

LongforItem.propTypes = {
  itemData: PropTypes.object
};

export default LongforItem;
