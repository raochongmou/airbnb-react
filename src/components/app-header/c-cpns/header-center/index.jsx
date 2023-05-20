import React, { memo } from "react";
import { HeaderCenterWrapper } from "./style";
import Search from "@/assets/svg/search";

const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div>
        <span>关键字</span>
        <div className="icon-search">
          <Search />
        </div>
      </div>
    </HeaderCenterWrapper>
  );
});

export default HeaderCenter;
