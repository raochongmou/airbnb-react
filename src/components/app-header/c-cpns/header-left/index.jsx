import React, { memo } from "react";
import { HeaderLeftWrapper } from "./style";
import IconLogo from "@/assets/svg/logo";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }
  return (
    <HeaderLeftWrapper>
      <div onClick={handleClick}>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
