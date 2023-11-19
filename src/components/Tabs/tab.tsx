import React from "react";
import styles from './tabs.scss';

interface ITab {
  value: string;
  children: any;
  // This prop need not to be provided,
  // in case user needs control of click event, pass it to parent TabList component
  handleTabClick?: (event: any, value: string) => void
  // This prop need not to be provided,
  activeTab?: string;
}

export function Tab(props: ITab) {
  const { value, handleTabClick, activeTab } = props;

  const onTabClick = (event: any) => {
    handleTabClick(event, value);
  }

  return (
    <div
      className={`${styles.tabContainer} ${value === activeTab ? styles.activeTab : styles.deactiveTab}`}
      onClick={onTabClick}
    >
      <span>{props.children}</span>
    </div>
  )
}
