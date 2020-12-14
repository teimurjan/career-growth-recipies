import styled from "styled-components";

export const StyledPicture = styled.img`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;
