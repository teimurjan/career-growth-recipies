import React, { useState, useEffect } from "react";

import {
  StyledWrapper,
  StyledPath,
  StyledControl,
  StyledPrependWrapper,
  StyledAppendWrapper,
} from "./index.styles";

export default ({ progress = 0, autoFillProgress = undefined, prepend, append }) => {
  const [progress_, setProgress] = useState(progress);

  useEffect(() => {
    if (autoFillProgress) {
      setProgress(autoFillProgress);
    }
  }, [autoFillProgress]);

  return (
    <StyledWrapper>
      <StyledPrependWrapper>{prepend}</StyledPrependWrapper>
      <StyledPath>
        <StyledControl style={{ width: `${progress_}%` }} />
      </StyledPath>
      <StyledAppendWrapper>{append}</StyledAppendWrapper>
    </StyledWrapper>
  );
};
