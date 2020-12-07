import styled from "@emotion/styled";

import Container from "../container";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavContainer = styled(Container)`
  position: fixed;
  left: 0;
  top: 50%;
  height: 350px;
  transform: translateY(-50%);
`;

export const StyledNav = styled.ul`
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
`;

export const StyledNavItem = styled.li`
  margin: 0;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  align-items: center;
  position: relative;
  filter: ${(props) => (props.active ? undefined : "grayscale(100%)")};
  cursor: pointer;
`;
