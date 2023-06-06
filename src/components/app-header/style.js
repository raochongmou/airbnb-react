import { styled } from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  height: 80px;
  background-color: #fff;
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
`;
