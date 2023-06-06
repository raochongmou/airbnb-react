import { styled } from "styled-components";

export const EntireFilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 99;
  padding-bottom: 15px;
  border-bottom: 0.5px solid #eee;
  .filter-list {
    display: flex;
    margin: 20px 23px 0 23px;
    .filter-item {
      flex-basis: 120px;
      flex-shrink: 0;
      border: 0.5px solid #d8d8d8;
      box-sizing: border-box;
      padding: 14px 16px;
      text-align: center;
      font-size: 17px;
      white-space: nowrap;
      cursor: pointer;
      ${props => props.theme.mixin.boxshadow};
      &.active {
        color: #fff;
        background-color: ${props => props.theme.color.secondColor};
      }
    }
    .filter-item + .filter-item {
      margin-left: 16px;
    }
  }
`;
