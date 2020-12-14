import React, { useState, useLayoutEffect } from "react";
import _ from "lodash";

import { StyledChar } from "./index.styles";

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";

const getRandomChar = () => {
  const char = CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  return Math.random() > 0.5 ? char.toUpperCase() : char;
};

export default () => {
  const [text, setText] = useState(getRandomChar());

  useLayoutEffect(() => {
    if (Math.random() < 0.85) return;

    const intervalId = setInterval(function () {
      setText(getRandomChar());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledChar style={{ opacity: _.random(0.2, 0.4) }}>{text}</StyledChar>
  );
};
