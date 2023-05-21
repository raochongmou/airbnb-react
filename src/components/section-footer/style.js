import { styled } from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    .text {
      margin-right: 10px;
      color: ${props => props.fontcolor};
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
