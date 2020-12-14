import React from "react";

import { StyledText } from "./index.styles";

export default ({ className, children, as, color, bold, align }) => (
  <StyledText
    className={className}
    as={as}
    color={color}
    bold={bold}
    align={align}
  >
    {children}
  </StyledText>
);
