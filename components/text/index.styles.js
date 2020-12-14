import styled from "styled-components";

export const StyledText = styled.span`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => props.theme.colors[props.color]};
  text-align: ${(props) => props.align};
  margin: 0;
`;
