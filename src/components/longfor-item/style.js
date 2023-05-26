import { styled } from "styled-components";

export const LongforItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  flex-wrap: nowrap;
  .long-inner {
    width: 100%;
    padding: 0 8px;
    position: relative;
    z-index: 1;
    color: #fff;
    .long-img {
      width: 100%;
    }
    .long-bg {
      position: absolute;
      right: 8px;
      left: 8px;
      bottom: 0;
      z-index: 0;
      height: 60%;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.1)
      );
    }
    .long-city {
      width: 100%;
      position: absolute;
      text-align: center;
      bottom: 20%;
    }
    .long-price {
      width: 100%;
      position: absolute;
      text-align: center;
      bottom: 12%;
    }
  }
`;
