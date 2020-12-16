import React from "react";

import { StyledCard } from "./index.styles";

import Text from "../text";

export default ({ className, children: _, title, active }) => (
  <StyledCard className={className} color={active ? "primary" : undefined}>
    {title && (
      <Text as="h4" align="center" bold>
        {title}
      </Text>
    )}
  </StyledCard>
);
