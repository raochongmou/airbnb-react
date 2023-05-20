import React, { memo } from "react";
import { HeaderLeftWrapper } from "./style";
import IconLogo from "@/assets/svg/logo";

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <div>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
