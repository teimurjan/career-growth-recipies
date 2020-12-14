import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPath = styled.div`
  background: ${(props) => props.theme.colors.lightBackground};
  border-radius: 20px;
  height: 30px;
  position: relative;
  flex: 1;
  overflow: hidden;
`;

export const StyledControl = styled.div`
  border-radius: 20px;
  background: ${(props) => props.theme.colors.primary};
  height: 30px;
  position: absolute;
  transition: width 5s ease-in-out;
  top: 0;
  left: 0;
`;

export const StyledPrependWrapper = styled.div`
  margin-right: 1rem;
  font-size: 5rem;
`;

export const StyledAppendWrapper = styled.div`
  margin-left: 1rem;
  font-size: 5rem;
`;
