import React from "react";
import { Button } from "../Button";
import styles from './DataTable.module.scss';
import ToggleInput from '../ToggleInput';

interface IRenderSettings {
  showSettings: boolean;
  tableHeader: object;
  setTableHeaderData: (...args: any[]) => void
  setShowSettings: (...args: any[]) => void
  resetSettings: (...args: any[]) => void
}

export function RenderSettings({
  showSettings,
  tableHeader,
  setTableHeaderData,
  setShowSettings,
  resetSettings,
}: IRenderSettings) {
  const handleClick = (key, value) => {
    setTableHeaderData((prevState) => {
      prevState[key].visible = value;
      return { ...prevState };
    });
  };

  const handleApply = () => {
    console.log("apply clicked");
    setShowSettings(false);
  };

  const handleCancel = () => {
    resetSettings();
    setShowSettings(false);
  };

  return (
    <div
      className={`${showSettings ? styles.showSettings : "hide"} ${
        styles.settingsContainer
      }`}
    >
      <div className={styles.settingsTitle}>Settings</div>
      <div className={"styles.settingsContent"}>
        {Object.keys(tableHeader).map((key) => (
          <div key={key} className={styles.settingsRow}>
            <div className={"styles.settingsLabel"}>{tableHeader[key].label}</div>
            <ToggleInput
              value={key}
              onClick={handleClick}
              initialState={tableHeader[key].visible}
            />
          </div>
        ))}
      </div>
      <div className={styles.settingsActions}>
        <Button label="Apply" onClick={handleApply} />
        <Button label="Cancel" onClick={handleCancel} />
      </div>
    </div>
  );
}
