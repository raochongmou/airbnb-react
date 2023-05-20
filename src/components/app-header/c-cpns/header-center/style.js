import { styled } from "styled-components";

export const HeaderCenterWrapper = styled.div`
  width: 363px;
  /* color: ${props => props.theme.color.primaryColor}; */
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .18);
  ${props => props.theme.mixin.boxshadow}//混入样式设置
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin: 0 10px;
    cursor: pointer;
    .icon-search {
      ${props => props.theme.mixin.flexLayout}
      width: 32px;
      height: 32px;
      background-color: ${props => props.theme.color.primaryColor};
      color: #fff;
      border-radius: 50%;
    }
  }
`;
