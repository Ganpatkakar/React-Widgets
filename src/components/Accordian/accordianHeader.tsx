import React, { ReactNode } from "react";
import styles from "./accordian.style.scss";

interface IAccordianHeader {
  icon?: ReactNode;
  children: ReactNode;
  isActive?: boolean;
}

const openSvgIcon = (
  <svg
    fill="currentColor"
    aria-hidden="true"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: "rotate(90deg)" }}
  >
    <path
      d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"
      fill="currentColor"
    ></path>
  </svg>
);

const closeSvgIcon = (
  <svg
    fill="currentColor"
    aria-hidden="true"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: "rotate(0deg)" }}
  >
    <path
      d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"
      fill="currentColor"
    ></path>
  </svg>
);

export function AccordianHeader(props: any) {
  const { icon, children, isActive } = props;

  return (
    <div className={styles.accordianHeader}>
      <svg
        fill="currentColor"
        aria-hidden="true"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${isActive ? 90 : 0}deg)` }}
      >
        <path
          d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"
          fill="currentColor"
        ></path>
      </svg>
      <div className={styles.accordianHeaderTitle}>
        {icon && icon}
        {children}
      </div>
    </div>
  );
}
