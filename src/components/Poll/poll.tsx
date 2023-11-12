import React, { useState } from "react";
import CreatePoll from "./createPoll";
import styles from './poll.scss';
import PollResult from "./pollResult";
import { IPollData } from './pollType';

const pollOptions: IPollData = {
  question: '',
  options: ['', '']
}

function PollComponent() {
  const [showPoll, setShowPoll] = useState(false);
  const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState("");


  const handleCreatepoll = (pollOptions: IPollData) => {
    const { question, options } = pollOptions;
    setQuestion(question);
    setOptions([...options]);
    setShowPoll(true)
  }

  return (
    <div className={styles.pollContainer}>
      {showPoll && <PollResult question={question} options={options}/>}
      {!showPoll && <CreatePoll createPoll={handleCreatepoll} />}
    </div>
  )
}

export default PollComponent;