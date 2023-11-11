import * as React from 'react';
import styles from './tooltip.scss';

function getPositionClassName (position: any) {
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

const Tooltip = (props: any) => {
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
