import React from "react";
import { IPollData } from './pollType';
import ShowPollPreview from "./showPollPreview";

function PollResult (props: IPollData) {
  const {question, options} = props;
  return <><ShowPollPreview question={question} options={options}/></>
}

export default PollResult;