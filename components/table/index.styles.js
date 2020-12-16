import styled from "styled-components";

import { Row, Col } from "react-simple-flex-grid";

export const StyledWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const StyledRow = styled(Row)`
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  &:nth-child(2n + 1) {
    background: ${(props) => props.theme.colors.lightBackground};
  }
`;

export const StyledCell = styled(Col)`
  padding: 1rem;
  align-self: stretch;

  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.colors.border};
  }
`;
