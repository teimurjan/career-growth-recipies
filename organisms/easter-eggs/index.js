import React from "react";

import { useTheme } from "styled-components";
import { useSteps } from "mdx-deck";

import useFadeIn from "../../hooks/use-fade-in";

const getFootprintsStyle = (direction) => {
  if (direction === "left") {
    return { transformOrigin: "50% 50%", transform: "rotateZ(-90deg)" };
  }

  if (direction === "right") {
    return { transformOrigin: "50% 50%", transform: "rotateZ(90deg)" };
  }

  if (direction === "top-right") {
    return {
      transformOrigin: "50% 50%",
      transform: "rotateZ(45deg)",
    };
  }

  if (direction === "top-left") {
    return { transformOrigin: "50% 50%", transform: "rotateZ(-45deg)" };
  }

  return undefined;
};
const Footprints = ({ direction, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20pt"
    height="20pt"
    viewBox="0 0 20 20"
    {...rest}
  >
    <path
      style={getFootprintsStyle(direction)}
      fill="currentColor"
      d="M17.465 2.395c-3.582-.961-7 5.714-5.89 10.375.05.226.222.402.445.46l4.742 1.27a.625.625 0 00.617-.172c3.316-3.515 3.625-10.984.086-11.933zm0 0M16.18 15.64l-4.227-1.132a.626.626 0 00-.765.441l-.403 1.508a2.813 2.813 0 005.434 1.457l.402-1.508a.623.623 0 00-.441-.765zm0 0M8.438 10.465c.687-2.906-.391-6.91-2.458-9.067C3.73-.949 1.016-.277.227 2.938c-.715 2.902.355 6.91 2.406 9.082.152.16.387.234.617.175l4.738-1.273a.627.627 0 00.45-.457zm0 0M8.82 12.64a.625.625 0 00-.765-.44l-4.227 1.132a.626.626 0 00-.441.766l.406 1.507a2.816 2.816 0 003.445 1.993 2.813 2.813 0 001.989-3.446zm0 0"
    />
  </svg>
);

export default (props) => {
  const theme = useTheme();
  const step = useSteps(1);

  const fadeInStyle = useFadeIn({ active: step === 1 });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 584 364"
      {...props}
    >
      <Footprints style={{ color: theme.colors.primary }} x={268} y={250} />
      <Footprints style={{ color: theme.colors.primary }} x={268} y={190} />
      <Footprints style={{ color: theme.colors.primary }} x={268} y={130} />
      <Footprints style={{ color: theme.colors.primary }} x={268} y={70} />
      <Footprints style={{ color: theme.colors.primary }} x={268} y={20} />

      <Footprints
        direction="left"
        style={{ color: theme.colors.primary }}
        x={208}
        y={20}
      />
      <Footprints
        direction="left"
        style={{ color: theme.colors.primary }}
        x={148}
        y={20}
      />
      <Footprints
        direction="left"
        style={{ color: theme.colors.primary }}
        x={88}
        y={20}
      />

      <Footprints
        direction="right"
        style={{ color: theme.colors.primary }}
        x={328}
        y={20}
      />
      <Footprints
        direction="right"
        style={{ color: theme.colors.primary }}
        x={388}
        y={20}
      />
      <Footprints
        direction="right"
        style={{ color: theme.colors.primary }}
        x={448}
        y={20}
      />

      <Footprints
        direction="top-right"
        style={{
          color: theme.colors.secondary,
          overflow: "visible",
          ...fadeInStyle,
        }}
        x={328}
        y={200}
      />
      <Footprints
        direction="top-right"
        style={{
          color: theme.colors.secondary,
          overflow: "visible",
          ...fadeInStyle,
        }}
        x={388}
        y={140}
      />
      <Footprints
        direction="top-right"
        style={{
          color: theme.colors.secondary,
          overflow: "visible",
          ...fadeInStyle,
        }}
        x={448}
        y={80}
      />
      
      <Footprints
        direction="top-left"
        style={{
          color: theme.colors.secondary,
          overflow: "visible",
          ...fadeInStyle,
        }}
        x={208}
        y={200}
      />
      <Footprints
        direction="top-left"
        style={{
          color: theme.colors.secondary,
          overflow: "visible",
          ...fadeInStyle,
        }}
        x={148}
        y={140}
      />
      <Footprints
        direction="top-left"
        style={{
          color: theme.colors.secondary,
          overflow: "visible",
          ...fadeInStyle,
        }}
        x={88}
        y={80}
      />

      <text
        x={281}
        y={340}
        fill="#7EA6E0"
        fontFamily="Helvetica"
        fontSize={54}
        textAnchor="middle"
      >
        {"\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB"}
      </text>
      <text
        x={40}
        y={58}
        fill="#7EA6E0"
        fontFamily="Helvetica"
        fontSize={54}
        textAnchor="middle"
      >
        {"\uD83D\uDCDA"}
      </text>
      <text
        x={530}
        y={52}
        fill="#7EA6E0"
        fontFamily="Helvetica"
        fontSize={54}
        textAnchor="middle"
      >
        {"\uD83E\uDD1D"}
      </text>
    </svg>
  );
};
