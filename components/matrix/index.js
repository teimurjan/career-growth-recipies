import React, { memo } from "react";

import _ from "lodash";
import { ThemeProvider } from "styled-components";

import { StyledWrapper, StyledColumn } from "./index.styles";

import MatrixChar from "../matrix-char";

import theme from "../../theme";

export default memo(
  ({ x = 1, y = 1 }) => (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        {_.times(x).map((xi) => (
          <StyledColumn
            key={xi}
            style={{ animationDelay: `${_.random(100, 6000)}ms` }}
          >
            {_.times(y).map((yi) => (
              <MatrixChar key={yi} />
            ))}
          </StyledColumn>
        ))}
      </StyledWrapper>
    </ThemeProvider>
  ),
  () => true
);
