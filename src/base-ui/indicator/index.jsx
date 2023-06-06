// import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo(props => {
  const { newIndex } = props;
  const indicatorRef = useRef();
  useEffect(
    () => {
      const indicatorEl = indicatorRef.current.children[newIndex];
      const itemLeft = indicatorEl.offsetLeft;
      const clientWidth = indicatorRef.current.clientWidth;
      const itemWidth = indicatorEl.clientWidth;
      let distance = itemLeft + itemWidth * 0.5 - clientWidth * 0.5;
      let scrollWidth = indicatorRef.current.scrollWidth;
      let totalWidth = scrollWidth - clientWidth;
      // 左边特殊情况
      if (distance < 0) distance = 0;
      // // 右边特殊情况
      if (distance > totalWidth) distance = totalWidth;
      indicatorRef.current.style.transform = `translateX(${-distance}px)`;
    },
    [newIndex]
  );
  return (
    <IndicatorWrapper>
      <div className="indicator-content" ref={indicatorRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

// Indicator.propTypes = {};

export default Indicator;
