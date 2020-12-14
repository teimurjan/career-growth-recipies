import React from "react";

import { StyledEmoji, StyledCard } from "./index.styles";

export default ({ className, emoji, children }) => (
  <StyledCard className={className}>
    <StyledEmoji>{emoji}</StyledEmoji>
    {children}
  </StyledCard>
);
