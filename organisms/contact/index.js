import React from "react";

import { Row, Col } from "react-simple-flex-grid";
import { GitHub, Linkedin, Mail, Airplay } from "react-feather";
import { useTheme } from "styled-components";

import Link from "../../components/link";

import { StyledLinkWrapper, StyledPicture } from "./index.styles";

import qrImg from "../../images/qr.png";

export default () => {
  const theme = useTheme();

  return (
    <Row gutter={20} align="middle">
      <Col span={8}>
        <StyledLinkWrapper>
          <Airplay size="3rem" color={theme.colors.primary} />
          <Link href="https://career-growth-recipies.netlify.app/">
            Презентация (отсканируйте QR-код)
          </Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <GitHub size="3rem" color={theme.colors.primary} />
          <Link href="https://github.com/teimurjan">github.com/teimurjan</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <Linkedin size="3rem" color={theme.colors.primary} />
          <Link href="https://linkedin.com/in/teimur-gasanov">
            linkedin.com/in/teimur-gasanov
          </Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <Mail size="3rem" color={theme.colors.primary} />
          <Link href="mailto:teymurgg321@gmail.com">teymurgg321@gmail.com</Link>
        </StyledLinkWrapper>
      </Col>
      <Col span={4}>
        <StyledPicture src={qrImg} />
      </Col>
    </Row>
  );
};
