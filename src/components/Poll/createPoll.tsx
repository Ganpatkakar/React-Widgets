import React, { useState } from "react";
import styles from './poll.scss';
import { Button } from "../Button";
import { ModelPopover } from "../ModelPopOver";
import { IOptions, IPollData } from "./pollType";
import uniqid from 'uniqid';

const defaultOptions: IOptions[] = [
  {title: '', votes: 0, id: uniqid()},
  {title: '', votes: 0, id: uniqid()}
];

interface ICreatePoll {
  createPoll: (pollData: IPollData) => void;
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
    newOptions[index] = {...newOptions[index], title: val};

    setOptions([...newOptions]);

  }

  const handleAddMoreOptions = () => {
    setOptions([...options, {title: '', votes: 0, id: uniqid()}]);
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
    const pollData: IPollData ={
      question,
      options,
      id: uniqid(),
      pollState: 'preview',
      participants: 0
    }
    createPoll(pollData);
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
          <h3>Create New poll</h3>
          <label htmlFor="question" className={styles.label}>Your Question</label>
          <input name="question" className={styles.inputElement} type="text" value={question} onChange={onChangeQuestion} />
          <div className={styles.optionsContainer} onChange={handleOptionsChange}>
            {
              options.map((option: IOptions, index: number) => {
                const {title, id} = option;
                return (
                  <div key={id}>
                    <label htmlFor={id} className={styles.label}>Option {index + 1}</label>
                    <input name={id} className={styles.inputElement} type="text" value={title} data-index={index}/>
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