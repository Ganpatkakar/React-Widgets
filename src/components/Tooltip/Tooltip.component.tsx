import * as React from 'react';
import styles from './tooltip.scss';

function getPositionClassName (position: string) {
  switch (position) {
    case "top":
      return "top";
    case "left":
      return "left";
    case "right":
      return "right";
    case "bottom":
      return "bottom";
    default:
      return "bottom";
  }
}

interface ITooltip {
  position: string;
  text: string;
  children: any
}

const Tooltip = (props: ITooltip) => {
  let { children, text, position } = props;
  position = position.toString()?.toLowerCase();
  const toolTipPosition = getPositionClassName(position);
  return (
    <span className={styles.tooltipContainer}>
      {children}
      <span className={`${styles.toolTipText} ${styles[toolTipPosition]}`}>{text}</span>
    </span>
  );
}

export default Tooltip;
