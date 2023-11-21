import React from "react";
import styles from './progressBar.scss';

interface IProgressBar {
  // lable of the progress bar
  // defaultValue: ""
  label?: string;

  // defaultValue: black
  labelColor?: string;

  // defaultValue: 0
  min?: number;

  // defaultValue: 1
  max?: number;

  // in case min and max is provided, it could be any number,
  // if min and max are not provided, use this betwen 0 and 1, i.e 0.5, 0.75
  value: number;
  // color of the progress bar, default is blue
  color?: string;

  // default round
  shape?: "square" | "round";

  // default medium
  size?: "small" | "medium" | "large"
}

const configsForHeight = {small: '2px', medium: '4px', large: '6px'}

export function ProgressBar(props: IProgressBar) {

  const {
    label = '',
    labelColor = 'black',
    min = 0,
    max = 1,
    value = 0,
    color = "blue",
    shape = "round",
    size="medium"
  } = props;

  const progressBarWidth = (value - min) / (max - min) * 100;
  const height = configsForHeight[size];

  if (progressBarWidth > 100) {
    return (<div>Please provide correct min, max and value as per documentation</div>)
  }

  return (
    <div className={styles.progressBarContainer} style={{ color: color }}>
      <div 
        className={`${styles.progressBar} ${shape === 'round' ? styles.round : styles.square}`}
      >
        <div
          className={styles.progressBarBar}
          style={{ width: `${progressBarWidth}%`, backgroundColor: color, height: height }}
        >
        </div>
      </div>
      {label && <div className={styles.progressBarLabel} style={{ color: labelColor }}>{label}</div>}
    </div>
  )
}