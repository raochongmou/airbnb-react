import React, { memo, useEffect, useRef, useState } from "react";
import { ScrollWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";

const Scroll = memo(props => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  // 记录最左测初始位置
  const [posIndex, setPosIndex] = useState(0);
  const totalDistance = useRef();
  const scrollRef = useRef();
  useEffect(
    () => {
      // 当前父元素可视宽度(只包含padding,不包含margin和border)
      const clientWidth = scrollRef.current.clientWidth;
      // 当前内容区可滚动宽度(包含padding,不包含margin和border)
      const scrollWidth = scrollRef.current.scrollWidth;
      const totalDistances = scrollWidth - clientWidth;
      totalDistance.current = totalDistances;
      setShowRight(totalDistances > 0);
    },
    [props.children]
  );
  function handleClick(bol) {
    const newIndex = bol ? posIndex + 1 : posIndex - 1;
    const newEl = scrollRef.current.children[newIndex];
    const offsetLeft = newEl.offsetLeft;
    scrollRef.current.style.transform = `translate(-${offsetLeft}px)`;
    // 是否继续显示右边按钮
    setPosIndex(newIndex);
    setShowRight(totalDistance.current > offsetLeft);
    console.log("offsetLeft", offsetLeft);
    setShowLeft(offsetLeft > 0);
  }

  return (
    <ScrollWrapper>
      <div className="scroll-wrapper-div">
        {showLeft &&
          <div className="control left" onClick={() => handleClick(false)}>
            <IconArrowLeft />
          </div>}
        {showRight &&
          <div className="control right" onClick={() => handleClick(true)}>
            <IconMoreArrow />
          </div>}
        <div className="slot" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  );
});

export default Scroll;
