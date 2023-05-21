import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";

const SectionFooter = memo(props => {
  const { name } = props;
  let showName = "显示全部";
  if (name) {
    showName = `显示更多${name}房源`;
  }
  return (
    <SectionFooterWrapper fontcolor={name ? "#00848A" : "#000"}>
      <div className="info">
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
