import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionHeaderWrappper } from "./style";

const SectionHeader = memo(props => {
  const { title, subTitle } = props;
  return (
    <SectionHeaderWrappper>
      <h2 className="title">
        {title}
      </h2>
      {subTitle &&
        <div className="sub-title">
          {subTitle}
        </div>}
    </SectionHeaderWrappper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default SectionHeader;
