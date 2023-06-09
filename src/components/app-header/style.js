import { styled } from "styled-components";

export default styled.div`
  border-bottom: 1px solid #eee;
  /* background-color: #fff; */
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
  .header-content {
    background-color: #fff;
    position: relative;
    z-index: 99;
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
  > .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .8);
  }
`;

export const SearchWrapper = styled.div`
  height: ${props => (props.issearch ? "0px" : "100px")};
`;
