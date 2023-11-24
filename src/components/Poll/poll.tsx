import React, { useState } from "react";
import CreatePoll from "./createPoll";
import PollResult from "./pollResult";
import { IOptions, IPollData } from "./pollType";
import ShowPollPreview from "./showPollPreview";
import uniqid from "uniqid";
import styles from "./poll.scss";

const initialState: IPollData = {
  question: "",
  options: [{ title: "", votes: 0, id: uniqid() }],
  id: uniqid(),
  pollState: "notStarted",
  participants: 0,
};

function PollComponent() {
  const [pollData, setPollData] = useState(initialState);
  const { pollState } = pollData;

  const handleCreatepoll = (pollData: IPollData) => {
    setPollData({ ...pollData });
  };

  const handlePollSubmit = (options: IOptions[]) => {
    pollData.options = options;
    pollData.pollState = "submited";
    pollData.participants += 1;
    setPollData({ ...pollData });
  };

  if (pollState === "notStarted") {
    return (
      <div className={styles.pollContainer}>
        <CreatePoll createPoll={handleCreatepoll} />
      </div>
    );
  }

  if (pollState === "preview") {
    return (
      <div className={styles.pollContainer}>
        <ShowPollPreview
          pollData={pollData}
          handlePollSubmit={handlePollSubmit}
        />
      </div>
    );
  }

  if (pollState === "submited") {
    return (
      <div className={styles.pollContainer}>
        <PollResult {...pollData} />
      </div>
    );
  }
}

export default PollComponent;
