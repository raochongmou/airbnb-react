import React, { memo } from "react";
import { LoginRegisterWrapper } from "./style";

const LoginRegisterList = memo(() => {
  return (
    <LoginRegisterWrapper>
      <div className="login-register-top">
        <li>
          <a href="#javascript">登录</a>
        </li>
        <li>
          <a href="#javascript">注册</a>
        </li>
      </div>
      <div className="login-register-bottom">
        <li>
          <a href="#javascript">来爱彼迎发展房源</a>
        </li>
        <li>
          <a href="#javascript">帮助</a>
        </li>
      </div>
    </LoginRegisterWrapper>
  );
});

export default LoginRegisterList;
