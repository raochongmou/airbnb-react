import React, { memo, useEffect, useState } from "react";
import { HeaderRightWrapper } from "./style";
import Earth from "@/assets/svg/earth";
import Profile from "@/assets/svg/profile";
import Avator from "@/assets/svg/avator";
import LoginRegisterList from "./login-register-list";

const HeaderRight = memo(() => {
  const [showProfile, setShowProfile] = useState(false);
  function handleClickProfile() {
    setShowProfile(true);
  }
  useEffect(() => {
    function handleWindowClick() {
      setShowProfile(false);
    }
    window.addEventListener("click", handleWindowClick, true);
    return () => {
      window.removeEventListener(handleWindowClick, true);
    };
  }, []);
  return (
    <HeaderRightWrapper>
      <div className="icon-earth">
        <Earth />
      </div>
      <div className="icon-right" onClick={() => handleClickProfile()}>
        <Profile />
        <Avator />
        {showProfile && <LoginRegisterList />}
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
