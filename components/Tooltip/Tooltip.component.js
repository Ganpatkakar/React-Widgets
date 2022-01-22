import styles from './Tooltip.module.scss';

function getPositionClassName (position) {
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

const Tooltip = ({ children, text, position }) => {
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
