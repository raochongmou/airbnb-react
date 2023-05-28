import { styled } from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  .indicator-content {
    display: flex;
    position: relative;
    transition: transform 0.8s ease;

    > * {
      flex-shrink: 0;
    }
  }
`;
