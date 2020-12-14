import React from "react";
import { Col } from "react-simple-flex-grid";
import { useSteps } from "mdx-deck";

import { StyledWrapper, StyledTabsRow, StyledContentRow } from "./index.styles";

export default ({ children, ...rest }) => {
  const childrenArray = React.Children.toArray(children);
  const count = childrenArray.length;
  const step = useSteps(count);

  const activeIndex = step - 1;
  const activeChild = childrenArray[activeIndex];

  return (
    <StyledWrapper {...rest}>
      <StyledTabsRow align="stretch" gutter={20}>
        {React.Children.map(children, (child, i) => (
          <Col span={12 / count}>
            {React.cloneElement(child, {
              active: activeIndex === i,
            })}
          </Col>
        ))}
      </StyledTabsRow>
      <StyledContentRow
        style={{ visibility: activeChild ? "visible" : "hidden" }}
      >
        <Col>{(activeChild ?? childrenArray[0]).props.children}</Col>
      </StyledContentRow>
    </StyledWrapper>
  );
};
