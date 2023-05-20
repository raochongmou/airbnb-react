import { styled } from "styled-components";

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  margin-right: 24px;
  align-items: center;
  color: ${props => props.theme.text.primaryColor};
  .icon-earth {
    ${props => props.theme.mixin.flexLayout} width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all 250ms ease-in;
    cursor: pointer;
    &:hover {
      background-color: rgba(113, 113, 113, .18);
    }
  }
  .icon-right {
    border: 1px solid ${props => props.theme.text.gray};
    border-radius: 20px;
    display: flex;
    width: 78px;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    position: relative;
    ${props => props.theme.mixin.boxshadow};
  }
`;
