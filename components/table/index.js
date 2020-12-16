import React from "react";

import { StyledWrapper, StyledRow, StyledCell } from "./index.styles";

const Table = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

Table.Row = ({ children, ...rest }) => {
  const count = React.Children.count(children);

  return (
    <StyledRow {...rest}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { span: 12 / count })
      )}
    </StyledRow>
  );
};

Table.Cell = StyledCell;

export default Table;
