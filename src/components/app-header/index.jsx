import React, { memo } from "react";
import HeaderWrapper from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import { shallowEqual, useSelector } from "react-redux";

const AppHeader = memo(props => {
  const { isFixed } = useSelector(
    state => ({
      isFixed: state.main.isFixed
    }),
    shallowEqual
  );
  return (
    <HeaderWrapper className={isFixed ? "fixed" : ""}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
