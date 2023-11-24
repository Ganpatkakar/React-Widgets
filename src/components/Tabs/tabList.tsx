import React, { Children, ReactComponentElement, useState } from "react";
import styles from "./tabs.scss";

export interface ITabList {
  // To control and get active tab value, provide onTabClick prop
  onTabClick?: (selectedTab: string) => void | any;
  // By default when component is called, provide default selectd Tab value
  defaultSelectedTab?: string;
}

export function TabList<ReactComponentElement>(props: any) {
  const { onTabClick = () => {}, defaultSelectedTab = "" } = props;
  const [activeTab, setActiveTab] = useState(defaultSelectedTab);

  const handleTabClick = (event: any, value: string) => {
    event.preventDefault();
    setActiveTab(value);
    onTabClick(value);
    return value;
  };

  return (
    <div className={styles.tabListContainer}>
      {Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          handleTabClick,
          activeTab,
        });
      })}
    </div>
  );
}
