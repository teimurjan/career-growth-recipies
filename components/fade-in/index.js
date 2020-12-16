import React from "react";

import useFadeIn from "../../hooks/use-fade-in";

export default ({ children, delay, onComplete }) => {
  const style = useFadeIn({ delay, onComplete });

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { style })
  );
};
