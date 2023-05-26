import { styled } from "styled-components";

export const TabsWrapper = styled.div`
  /* display: flex; */
  margin: 20px 0;
  .item {
    flex-basis: 120px;
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 14px 16px;
    text-align: center;
    border-radius: 3px;
    font-size: 17px;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    ${props => props.theme.mixin.boxshadow};
    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondColor};
    }
  }
  .item + .item {
    margin-left: 16px;
  }
`;
