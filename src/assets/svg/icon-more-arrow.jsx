import React, { memo } from "react";
import { styleToStr } from "./utils";

const IconMoreArrow = memo(props => {
  const { width = 10, height = 10 } = props;
  return (
    <svg
      viewBox="0 0 18 18"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={styleToStr(
        `height: ${height}px; width: ${width}px; fill: currentcolor;`
      )}
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      />
    </svg>
  );
});

export default IconMoreArrow;
