import styled, { keyframes } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const fallingKeyframes = keyframes`{
  from {
    transform: translateY(-100vh);
    opacity: 1;
  }

  75% {
    opacity: 0;
  }

  to {
    transform: translateY(100vh);
  }
}`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  opacity: 0;
  animation: ${fallingKeyframes} 6s linear infinite;
`;
