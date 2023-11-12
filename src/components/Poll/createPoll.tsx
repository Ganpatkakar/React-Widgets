import React, { useState } from "react";
import styles from './poll.scss';
import { Button } from "../Button";
import { ModelPopover } from "../ModelPopOver";

const defaultOptions = ['', ''];
export interface IPollData {
  question: string;
  options: string[];
}

interface ICreatePoll {
  createPoll: (pollOptions: IPollData) => void;
}

function CreatePoll({createPoll}: ICreatePoll) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(defaultOptions);
  const [showMode, setShowModel] = useState(false);

  const onChangeQuestion = (event: any) => {
    event.preventDefault();
    const questionVal = event.target.value;
    setQuestion(questionVal);
  }

  const handleOptionsChange = (event: any) => {
    event.preventDefault();
    const target = event.target;
    const val = target.value;
    const index = target.dataset.index;

    const newOptions = [...options];
    newOptions[index] = val;

    setOptions([...newOptions]);

  }

  const handleAddMoreOptions = () => {
    setOptions([...options, '']);
  }

  const createPollClickHanlder = (event: React.SyntheticEvent) => {
    console.log("Create poll clicked");
    setShowModel(true);
  }

  const closePollModel = () => {
    setShowModel(false);
  }

  const handleCreatePoll = () => {
    closePollModel();
    createPoll({question, options});
  }


  return (
    <>
      <ModelPopover
        show={showMode}
        handleClose={closePollModel}
        handleApply={handleCreatePoll}
        showApply
        showFooter
      >
        <div className={styles.createPollContainer}>
          <div>Your Question</div>
          <input type="text" value={question} onChange={onChangeQuestion} />
          <div className={styles.optionsContainer} onChange={handleOptionsChange}>
            {
              options.map((option: string, index: number) => {
                return (
                  <div key={index} className={styles.options}>
                    <div>Option {index + 1}</div>
                    <input type="text" value={option} data-index={index}/>
                  </div>
                )
              })
            }
          </div>
          <Button label="Add options" onClick={handleAddMoreOptions}/>
        </div>
      </ModelPopover>
      <Button label="Create Poll" onClick={createPollClickHanlder}/>
    </>
  )
}

export default CreatePoll;