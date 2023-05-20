import { styled } from "styled-components";

export const LoginRegisterWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  line-height: 45px;
  background-color: #fff;
  color: rgb(221, 221, 221);
  box-shadow: 1px 1px 5px 5px rgba(221, 221, 221, .23);
  width: 240px;
  border-radius: 10px;
  /* padding: 0 20px; */
  li:hover {
    background-color: rgba(221, 221, 221, .23);
  }
  a {
    margin-left: 20px;
  }
  .login-register-top {
    border-bottom: 1px solid #ddd;
  }
`;
