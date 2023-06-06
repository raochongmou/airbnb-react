import { styled } from "styled-components";

export const EntireContentWrapper = styled.div`
  margin-top: 165px;
  padding: 15px;
  position: relative;

  .entire-content {
    display: flex;
    flex-wrap: wrap;
  }
  .entire-content-title {
    font-size: 25px;
    font-weight: 700;
    margin: 0 0 8px 10px;
  }
  .entire-content-loading {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
