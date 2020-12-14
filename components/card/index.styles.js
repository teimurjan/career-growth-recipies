import styled from "styled-components";

export const StyledCard = styled.div`
  background: ${(props) =>
    props.theme.colors[props.color || "lightBackground"]};
  border-radius: 20px;
  padding: 1rem 1.5rem;
  position: relative;
`;
