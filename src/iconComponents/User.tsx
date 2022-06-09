import * as React from "react";
import { SVGProps } from "react";

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.101 9.588h-1.203V8.412a.906.906 0 0 0-.899-.912.907.907 0 0 0-.899.912v1.176h-1.201A.906.906 0 0 0 16 10.5c0 .502.403.911.899.911H18.1v1.177c0 .503.404.912.899.912.496 0 .899-.41.899-.912v-1.177H21.1c.495 0 .899-.41.899-.912a.907.907 0 0 0-.899-.911ZM9.5 15.015c-4.046 0-7.5.647-7.5 3.232C2 20.83 5.433 21.5 9.5 21.5c4.045 0 7.5-.647 7.5-3.231 0-2.584-3.433-3.253-7.5-3.253Z"
      fill="currentColor"
    />
    <path
      opacity={0.4}
      d="M9.5 12.554c2.755 0 4.963-2.236 4.963-5.026 0-2.79-2.208-5.028-4.963-5.028S4.537 4.738 4.537 7.528c0 2.79 2.208 5.026 4.963 5.026Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUser;
