import React, { memo, useEffect, useState } from "react";
import { PictureWrapper } from "./style";
import PropTypes from "prop-types";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom";
import Indicator from "../indicator";
import IconTriangleTop from "@/assets/svg/icon-triangle-top";

const Picture = memo(props => {
  const { detailInfo, handleClose } = props;
  const [picIndex, setPicIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [showList, setShowList] = useState(true);
  function handleBtnClose() {
    if (handleClose) {
      handleClose();
    }
  }
  function handleBtnClick(isRight) {
    let newIndex = isRight ? picIndex + 1 : picIndex - 1;
    if (newIndex < 0) newIndex = detailInfo.picture_urls.length - 1;
    if (newIndex > detailInfo.picture_urls.length - 1) newIndex = 0;
    setPicIndex(newIndex);
    setIsNext(isRight);
  }
  // 切换下面小图片
  function handleChangeIdx(index) {
    if(index > picIndex) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
    setPicIndex(index);
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <PictureWrapper isNext={isNext} picIndex={picIndex} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={handleBtnClose}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="left btn" onClick={() => handleBtnClick(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="right btn" onClick={() => handleBtnClick(true)}>
            <IconMoreArrow width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              timeout={250}
              key={detailInfo.picture_urls[picIndex]}
              classNames="pic"
            >
              <img src={detailInfo.picture_urls[picIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
            <span>{picIndex + 1}/{detailInfo.picture_urls.length}:</span>
            <span>room apartment图片{picIndex + 1}</span>
            </div>
            <div className="switch" onClick={() => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="list">
          <Indicator newIndex={picIndex}>
            {
              detailInfo?.picture_urls?.map((item, index) => {
                return (
                  <div 
                  key={item}
                  onClick={() => handleChangeIdx(index)}
                  className={`item ${picIndex === index ? 'active' : ''}`}>
                    <img src={item} alt=""/>
                  </div>
                )
              })
            }
            </Indicator>
          </div>
        </div>
        </div>
    </PictureWrapper>
  );
});

Picture.propTypes = {
  detailInfo: PropTypes.object
};

export default Picture;
