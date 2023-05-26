import { styled } from "styled-components";

export const ScrollWrapper = styled.div`
  .scroll-wrapper-div {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .control {
    width: 25px;
    border-radius: 50%;
    height: 25px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #409eff;
    position: absolute;
    z-index: 2;
    transition: all 250ms ease;
    cursor: pointer;
    transform: translate(0px, 12.5px);
    &.left {
      left: 0;
      bottom: 50%;
    }
    &.right {
      right: 0;
      bottom: 50%;
    }
  }
  .slot {
    z-index: 0;
    display: flex;
    transition: transform 800ms ease;
  }
`;
