import React, { ReactNode, useState } from "react";
import styles from './tab.scss';

interface ITabContent {
  tabKey: string;
  title: string;
  content: ReactNode | string;
}

export interface ITab {
  tabs: ITabContent[];
}

function Tab(props: ITab) {
  const { tabs = [] } = props;
  const { tabKey: initialActiveTab, content } = tabs[0] || {}
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [tabContent, setTabContent] = useState(content);


  const handleActiveTab = (event: any) => {
    event.preventDefault();
    const target = event.target;
    const key = target.dataset.key;
    const { tabKey, content } = tabs.find((tab) => tab.tabKey === key);
    setActiveTab(tabKey);
    setTabContent(content);
  }

  return (
    <>
      <div className={styles.tabContainer}>
        <div className={styles.tabsNavContainer}>
          <ul className={styles.tabLists} onClick={handleActiveTab}>
            {tabs.map(({ tabKey, title }: ITabContent, index) => {
              const classes = [styles.tabList, tabKey === activeTab ? styles.activeTab : styles.nonActive].join(" ");
              return (
                <li
                  key={tabKey}
                  data-key={tabKey}
                  className={classes}
                >
                  {title}
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.tabsContnentContainer}>
          {tabContent}
        </div>
      </div >
    </>
  )
}

export default Tab;