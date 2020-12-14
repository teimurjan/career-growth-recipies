import React from "react";
import _ from "lodash";

import { StyledWrapper, StyledColumn } from "./index.styles";
import MatrixChar from "../matrix-char";

export default ({ x = 1, y = 1 }) => (
  <StyledWrapper>
    {_.times(x).map((xi) => (
      <StyledColumn key={xi}>
        {_.times(y).map((yi) => (
          <MatrixChar key={yi} opacity={_.random(0.1, 0.25)} />
        ))}
      </StyledColumn>
    ))}
  </StyledWrapper>
);
