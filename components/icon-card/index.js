import React from "react";

import { StyledIconWrapper, StyledWrapper, StyledAlt } from "./index.styles";

export default ({ icon, alt, backgroundColor }) => (
  <StyledWrapper>
    <StyledIconWrapper backgroundColor={backgroundColor}>
      {icon}
    </StyledIconWrapper>
    <StyledAlt>{alt}</StyledAlt>
  </StyledWrapper>
);
