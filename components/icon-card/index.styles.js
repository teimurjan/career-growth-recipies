import styled, { keyframes } from "styled-components";

const color = keyframes`
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const StyledWrapper = styled.div``;

export const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.backgroundColor};
  border-radius: 20px;
  width: 200px;
  height: 200px;
  margin: auto;

  svg {
    stroke-dasharray: 100;
    animation: ${color} 2s linear alternate forwards;
  }
`;

export const StyledAlt = styled.div`
  margin-top: 20px;
  text-align: center;
`;
