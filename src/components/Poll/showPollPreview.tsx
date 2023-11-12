import React from "react";
import styles from './poll.scss';
import { IPollData } from "./pollType";

function ShowPollPreview(props: IPollData) {
  const {question, options} = props;

  return (
    <div className={styles.renderPollContainer}>
      <div className={styles.renderQuestion}>{question}</div>
      <div className={styles.renderOptions}>
        {options.map((option, index) => {
          return <div key={index} className={styles.renderOption}>{option}</div>
        })}
      </div>
    </div>
  )
}

export default ShowPollPreview;