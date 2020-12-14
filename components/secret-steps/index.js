import React from "react";

import { useTheme } from "styled-components";
import { useSteps } from "mdx-deck";

import useFadeIn from "../../hooks/use-fade-in";

const getFootstepsSVG = ({ color }) => {
  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="40"
      height="40"
      id="footsteps"
      version="1.1">
      <g id="shoeprints">
        <path
          fill="${color}"
          id="original"
          d="M 13.01798,25.39451 C 12.77399,25.64089 7.253,23.65425 7.18568,23.16408 6.35644,17.1269 10.30763,12.32575 14.15474,12.10585 c 4.51136,-0.25788 3.02218,9.08888 -1.13676,13.28866 z m -6.24402,9.15377 c -1.75334,-0.64849 -2.22119,-3.43642 -1.02572,-7.0593 0.23575,-0.71443 6.23884,1.28298 6.15248,1.91291 -0.6586,4.80359 -3.37343,5.79488 -5.12676,5.14639 z" />
        <use
          xlink:href="#original"
          id="copy"
          transform="matrix(-0.60808092,-0.79387506,-0.79387506,0.60808092,52.157707,10.212769)" />
      </g>
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export default (props) => {
  const theme = useTheme();
  const step = useSteps(1);

  const style = useFadeIn({ active: step === 1 });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-0.5 -0.5 584 364"
      {...props}
    >
      <image
        x={261.5}
        y={255.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-32 282 275.51)"
      />
      <image
        x={261.5}
        y={205.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-32 282 225.51)"
      />
      <image
        x={261.5}
        y={155.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-32 282 175.51)"
      />
      <image
        x={261.5}
        y={105.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-32 282 125.51)"
      />
      <image
        x={261.5}
        y={55.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-32 282 75.51)"
      />
      <image
        x={241.5}
        y={10.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-105 262 30.51)"
      />
      <image
        x={201.5}
        y={15.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-105 222 35.51)"
      />
      <image
        x={151.5}
        y={15.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-105 172 35.51)"
      />
      <image
        x={111.5}
        y={15.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-105 132 35.51)"
      />
      <image
        x={61.5}
        y={15.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-105 82 35.51)"
      />
      <image
        x={281.5}
        y={10.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-300 302 30.51)"
      />
      <image
        x={331.5}
        y={10.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-300 352 30.51)"
      />
      <image
        x={381.5}
        y={10.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-300 402 30.51)"
      />
      <image
        x={431.5}
        y={10.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-300 452 30.51)"
      />
      <image
        x={481.5}
        y={10.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.primary })}
        preserveAspectRatio="none"
        transform="rotate(-300 502 30.51)"
      />
      <image
        x={221.5}
        y={135.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.secondary })}
        style={style}
        preserveAspectRatio="none"
        transform="rotate(-90 242 155.51)"
      />
      <image
        x={181.5}
        y={115.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.secondary })}
        style={style}
        preserveAspectRatio="none"
        transform="rotate(-90 202 135.51)"
      />
      <image
        x={141.5}
        y={95.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.secondary })}
        style={style}
        preserveAspectRatio="none"
        transform="rotate(-90 162 115.51)"
      />
      <image
        x={101.5}
        y={75.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.secondary })}
        style={style}
        preserveAspectRatio="none"
        transform="rotate(-90 122 95.51)"
      />
      <image
        x={61.5}
        y={55.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.secondary })}
        style={style}
        preserveAspectRatio="none"
        transform="rotate(-90 82 75.51)"
      />
      <image
        x={302.5}
        y={88.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.secondary })}
        style={style}
        preserveAspectRatio="none"
        transform="rotate(33 323 108.51)"
      />
      <image
        x={341.5}
        y={65.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.secondary })}
        style={style}
        preserveAspectRatio="none"
        transform="rotate(33 362 85.51)"
      />
      <image
        x={380.5}
        y={42.01}
        width={40}
        height={40}
        xlinkHref={getFootstepsSVG({ color: theme.colors.secondary })}
        style={style}
        preserveAspectRatio="none"
        transform="rotate(33 401 62.51)"
      />
      <text
        x={281}
        y={348}
        fill="#7EA6E0"
        fontFamily="Helvetica"
        fontSize={54}
        textAnchor="middle"
      >
        {"\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB"}
      </text>
      <text
        x={27}
        y={58}
        fill="#7EA6E0"
        fontFamily="Helvetica"
        fontSize={54}
        textAnchor="middle"
      >
        {"\uD83D\uDCDA"}
      </text>
      <text
        x={557}
        y={48}
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
