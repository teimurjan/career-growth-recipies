import styled from "styled-components";

import Flex from "../../components/flex";
import Link from "../../components/link";
import Picture from "../../components/picture";

export const StyledLinkWrapper = styled(Flex).attrs({
  alignItems: "center",
})`
  margin-bottom: 1.5rem;

  ${Link} {
    margin-left: 1rem;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & svg {
    flex-shrink: 0;
  }
`;

export const StyledPicture = styled(Picture)`
  width: 300px;
`;
