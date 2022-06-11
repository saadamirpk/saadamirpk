import * as React from "react";
import { SVGProps } from "react";

const SvgProject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.243 4.738a4.024 4.024 0 0 0 4.027 4.021c.245-.001.49-.025.73-.07v7.973C20 20.015 18.021 22 14.662 22H7.346C3.98 22 2 20.016 2 16.662V9.355C2 6.002 3.979 4 7.346 4h7.967c-.047.243-.07.49-.07.738ZM13.15 14.897l2.858-3.688v-.018a.754.754 0 0 0-.14-1.045.73.73 0 0 0-1.039.15l-2.409 3.1-2.743-2.16a.74.74 0 0 0-1.047.14l-2.954 3.81a.72.72 0 0 0-.159.457.738.738 0 0 0 1.363.43l2.471-3.196 2.744 2.151a.74.74 0 0 0 1.055-.131Z"
      fill="currentColor"
    />
    <circle opacity={0.4} cx={19.5} cy={4.5} r={2.5} fill="#200E32" />
  </svg>
);

export default SvgProject;
