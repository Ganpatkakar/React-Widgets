import { useState } from "react";
import styles from "./PollWidget.module.scss";
import Button from '../Button';
import ModelPopover from "../ModelPopOver";
import PollWidgetOptions from './PollWidgetOptions.component';
import CreatePollOptions from './CreatePollOptions.component';


// Give a button for create poll widget
// Show this button till widget is not created
// Once widget is creted hide this button
// Poll widget create function should be on a model
// Final result of accepting polls should be on this page

export default function PollWidgetComponent() {
  const [showModel, setShowModel] = useState(false);
  const [showPoll, setShowPoll] = useState(false);

  const createPoll = (event) => {
    event.preventDefault();
    setShowModel(true);

  }

  const handleClosePopover = () => {
    setShowModel(false);
  }

  const setPollWigetOptions = () => {
    console.log("setPollWigetOptions")
    setShowPoll(true);
    handleClosePopover();
  }

  if (showPoll) {
    return <PollWidgetOptions />
  }

  return (
    <>
      <div>
        <ModelPopover
          show={showModel}
          handleClose={handleClosePopover}
          showFooter={false}
        >
          <>
            <CreatePollOptions setPollWigetOptions={setPollWigetOptions}/>
            <Button text={"Submit Poll"} onClick={setPollWigetOptions}/>
          </>
        </ModelPopover>
        <Button onClick={createPoll} text={"Create Poll"}/>
      </div>
    </>
  );
}
