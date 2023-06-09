import React, { memo, useState } from "react";
import HeaderWrapper, { SearchWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import { shallowEqual, useSelector } from "react-redux";

const AppHeader = memo(props => {
  const [isSearch, setIsSearch] = useState(true);
  const { isFixed } = useSelector(
    state => ({
      isFixed: state.main.isFixed
    }),
    shallowEqual
  );
  return (
    <HeaderWrapper className={isFixed ? "fixed" : ""}>
      <div className="header-content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
            handleSearchcb={() => setIsSearch(false)}
          />
          <HeaderRight />
        </div>
        <SearchWrapper issearch={isSearch} />
      </div>
      <div className="cover" onClick={() => setIsSearch(true)} />
    </HeaderWrapper>
  );
});

export default AppHeader;
