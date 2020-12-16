import React from "react";
import { Col } from "react-simple-flex-grid";

import { StyledWrapper, StyledTabsRow, StyledContentRow } from "./index.styles";

export default ({ children, current, mode, ...rest }) => {
  const childrenArray = React.Children.toArray(children);
  const activeChild = childrenArray[current];
  const count = React.Children.count(children);

  const renderContent = () => {
    if (current === "all") {
      return childrenArray.map((child, i) => (
        <StyledContentRow key={i}>
          <Col>{child.props.children}</Col>
        </StyledContentRow>
      ));
    }

    return (
      <StyledContentRow
        style={{ visibility: activeChild ? "visible" : "hidden" }}
      >
        <Col>{(activeChild ?? childrenArray[0]).props.children}</Col>
      </StyledContentRow>
    );
  };

  return (
    <StyledWrapper {...rest}>
      <StyledTabsRow align="stretch" gutter={20}>
        {React.Children.map(children, (child, i) => (
          <Col span={12 / count}>
            {React.cloneElement(child, { active: current === i })}
          </Col>
        ))}
      </StyledTabsRow>
      {renderContent()}
    </StyledWrapper>
  );
};
