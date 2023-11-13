import React, { useState } from "react";
import { IOptions, IPollData } from "./pollType";
import styles from './poll.scss';

function PollResult(props: IPollData) {
  const { question, options, participants } = props;

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultParticipants}>participants {participants}</div>
      <div className={styles.resultQuestions}>{question}</div>
      <ul className={styles.resultOptionsContainer}>
        {
          options.map(({title, id, votes}: IOptions) => {
            return (
              <li key={id} className={styles.resultOption}>
                <div className={styles.resultOptionTitle}>
                  <div className={styles.titleTextContainer} style={{'width': `${(votes/participants) * 100}%`}}>
                    <div className={styles.titleText}>{title}</div>
                  </div>
                </div>
                <div className={styles.resultOptionVotes}>{votes}</div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default PollResult;