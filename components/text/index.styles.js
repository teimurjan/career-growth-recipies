import styled from "@emotion/styled";

export const StyledText = styled.span`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => props.theme.colors[props.color]};
`;
