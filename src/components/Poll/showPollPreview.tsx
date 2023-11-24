import React, { useState } from "react";
import styles from "./poll.scss";
import { IOptions, IPollData } from "./pollType";
import PollResult from "./pollResult";
import { Button } from "../Button";

interface IPreviewComponent {
  pollData: IPollData;
  handlePollSubmit: (options: IOptions[]) => void;
}

function PreviewContent({ pollData, handlePollSubmit }: IPreviewComponent) {
  const { question, options } = pollData;
  const [activeOption, setActiveOption] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newOptions: IOptions[] = options.map((option) => {
      if (option.id === activeOption) {
        return { ...option, votes: option.votes + 1 };
      }
      return { ...option };
    });
    handlePollSubmit(newOptions);
  };

  const handleActiveOption = (event: any) => {
    event.preventDefault();
    const target = event.target;
    setActiveOption(target.dataset.key);
  };

  return (
    <div className={styles.previewContainer}>
      <div className={styles.previewQuestion}>{question}</div>
      <div className={styles.previewOptions} onClick={handleActiveOption}>
        {options.map((option) => {
          const { title, id } = option;
          return (
            <div
              key={id}
              data-key={id}
              className={`${styles.previewOption} ${
                activeOption === id && styles.active
              }`}
            >
              {title}
            </div>
          );
        })}
      </div>
      <Button
        label="Vote"
        onClick={handleSubmit}
        primary={activeOption !== ""}
        disabled={activeOption === ""}
      />
    </div>
  );
}

function ShowPollPreview({ pollData, handlePollSubmit }: IPreviewComponent) {
  const { question, options } = pollData;

  const [showPreview, setShowPreview] = useState(true);

  const handleShowPreview = () => {
    setShowPreview(true);
  };

  const handleShowResults = () => {
    setShowPreview(false);
  };

  return (
    <>
      {showPreview && (
        <PreviewContent
          pollData={pollData}
          handlePollSubmit={handlePollSubmit}
        />
      )}
      {!showPreview && <PollResult {...pollData} />}
      <div className={styles.showHidePreview}>
        {showPreview ? (
          <Button label="View Results" onClick={handleShowResults} />
        ) : (
          <Button label="Take back to poll" onClick={handleShowPreview} />
        )}
      </div>
    </>
  );
}

export default ShowPollPreview;
