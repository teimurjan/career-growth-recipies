import React from "react";
import { useDeck } from "mdx-deck";
import { ThemeProvider } from "styled-components";

import {
  StyledWrapper,
  StyledNavContainer,
  StyledNav,
  StyledNavItem,
} from "./index.styles";
import theme from "../../theme";
import Container from "../container";

const NAV_ITEMS = [
  {
    title: "О себе",
    startIndex: 0,
    emoji: "👨🏼‍💻",
  },
  {
    title: "Soft Skills",
    startIndex: 3,
    emoji: "🤝",
  },
  {
    title: "Hard Skills",
    startIndex: 7,
    emoji: "📚",
  },
  {
    title: "Публичный портрет",
    startIndex: 9,
    emoji: "🖼️",
  },
  {
    title: "Пасхалки",
    startIndex: 13,
    emoji: "🎁",
  },
  {
    title: "Заключение",
    startIndex: 16,
    emoji: "🦸🏼‍♂️",
  },
];

export default ({ children }) => {
  const state = useDeck();

  const showNav = state.index > 0;

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <Container>{children}</Container>

        {showNav && (
          <StyledNavContainer>
            <StyledNav>
              {NAV_ITEMS.map(({ startIndex, emoji }) => (
                <StyledNavItem
                  key={startIndex}
                  active={state.index >= startIndex}
                  onClick={() => state.setIndex(startIndex)}
                >
                  {emoji}
                </StyledNavItem>
              ))}
            </StyledNav>
          </StyledNavContainer>
        )}
      </StyledWrapper>

    </ThemeProvider>
  );
};
