import React from "react";

import { StyledEmoji, StyledCard } from "./index.styles";

export default ({ emoji, children }) => (
  <StyledCard>
    <StyledEmoji>{emoji}</StyledEmoji>
    {children}
  </StyledCard>
);
