import * as React from "react";
import { SVGProps } from "react";

const SvgAbout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.997 15.175c-4.313 0-7.997.68-7.997 3.4C4 21.295 7.66 22 11.997 22c4.313 0 7.997-.68 7.997-3.4 0-2.721-3.66-3.425-7.997-3.425Z"
      fill="currentColor"
    />
    <path
      opacity={0.4}
      d="M11.997 12.584a5.273 5.273 0 0 0 5.292-5.292A5.273 5.273 0 0 0 11.997 2a5.274 5.274 0 0 0-5.292 5.292 5.274 5.274 0 0 0 5.292 5.292Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAbout;
