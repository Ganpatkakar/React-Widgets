import React from "react";

export const checkboxChecked = (width: number = 12, height: number = 12) => (
  <svg
    fill="currentColor"
    className=""
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 0 1 1.06-.04Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const checkboxMixed = (width: number = 12, height: number = 12) => (
  <svg
    fill="currentColor"
    className=""
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z"
      fill="currentColor"
    ></path>
  </svg>
);
