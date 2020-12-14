import React from "react";
import useFadeIn from "../../hooks/use-fade-in";

export default ({ children, delay }) => {
  const style = useFadeIn({ delay });

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { style })
  );
};
