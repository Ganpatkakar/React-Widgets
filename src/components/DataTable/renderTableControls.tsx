import React from "react";
import { AiFillSetting } from "react-icons/ai";
import styles from "./DataTable.module.scss";

interface IRenderTableControls {
  searchEnabled: boolean;
  settingsEnabled: boolean;
  searchBy: string;
  handleSettingsClick: (...args: any[]) => void;
  handleSearch: (...args: any) => void;
}

export function RenderTableControls({
  searchEnabled,
  settingsEnabled,
  searchBy,
  handleSettingsClick,
  handleSearch,
}: IRenderTableControls) {
  return (
    <div className={styles.tableControlsContainer}>
      <div className={styles.searchContainer}>
        {searchEnabled && (
          <input
            onChange={handleSearch}
            className={styles.searchInput}
            type="text"
            placeholder={`Searchby ${searchBy}`}
          />
        )}
      </div>
      <div className={styles.tableSettings}>
        {settingsEnabled && <AiFillSetting onClick={handleSettingsClick} />}
      </div>
    </div>
  );
}
