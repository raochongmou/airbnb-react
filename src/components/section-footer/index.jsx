import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo(props => {
  const { name } = props;
  let showName = "显示全部";
  if (name) {
    showName = `显示更多${name}房源`;
  }
  const navigate = useNavigate();

  // 跳转到显示全部页面(显示更多)
  function handleMore() {
    navigate("/entire");
  }

  return (
    <SectionFooterWrapper fontcolor={name ? "#00848A" : "#000"}>
      <div className="info" onClick={handleMore}>
        <span className="text">
          {showName}
        </span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string
};

export default SectionFooter;
