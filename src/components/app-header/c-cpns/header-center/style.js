import { styled } from "styled-components";

export const HeaderCenterWrapper = styled.div`
  /* width: 363px;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .18); */
  /* ${props => props.theme.mixin.boxshadow} */
  .search-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin: 0 10px;
    cursor: pointer;
    .icon-search {
      ${props => props.theme.mixin.flexLayout} width: 32px;
      height: 32px;
      background-color: ${props => props.theme.color.primaryColor};
      color: #fff;
      border-radius: 50%;
    }
  }
  .search-wrapper {
    .search-detail {
      display: flex;
      justify-content: space-evenly;
      .search-tabs {
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;
        .search-li {
          padding: 10px 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          cursor: pointer;
          color: #ddd;
          span:hover {
            text-decoration: underline;
          }
          &.active {
            color: #00848a;
          }
        }
      }
    }
  }
  position: relative;
  width: 563px;
  .search-tabs-content {
    height: 60px;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    .search-content-li {
      padding: 20px 20px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        color: #00848a;
      }
    }
    border: 1px solid #ddd;
    border-radius: 50px;
  }
`;
