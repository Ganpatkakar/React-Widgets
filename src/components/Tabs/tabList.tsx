import React from "react";
import styles from "./tabs.scss";
import { TabsContext } from "./tabs";

export interface ITabList {
  children: any;
  value: string | number;
}

export function TabList(props: ITabList) {
  const {children, value} = props;
  const {activeTab, onTabClick} = React.useContext(TabsContext);

  return (
    <div onClick={() => onTabClick(value)} className={`${styles.tabContainer} ${activeTab === value ? styles.activeTab : ''}`}>{children}</div>
  );
}
