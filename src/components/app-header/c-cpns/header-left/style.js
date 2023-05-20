import { styled } from "styled-components";

export const HeaderLeftWrapper = styled.div`
  flex: 1;
  color: ${props => props.theme.color.primaryColor};
  /* color: ${props => props.theme.color.secondColor}; */
  div {
    margin-left: 24px;
  }
`;
