import React from "react";
import styles from "./tabs.scss";

interface ITabs {
  children: any;
  defaultActiveTab: string;
  handleTabClickCb?: (value: string) => void;
}

export const TabsContext = React.createContext(null);

export function Tabs(props: ITabs) {
  const {children, defaultActiveTab = '', handleTabClickCb = () => {}} = props;

  const [activeTab, setActiveTab] = React.useState(defaultActiveTab);

  const onTabClick = (value: any) => {
    setActiveTab(value)
    handleTabClickCb(value);
  };

  return (
    <TabsContext.Provider value={{activeTab, onTabClick}}>
      <div className={styles.tabsContainer}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export const TabsHeader = (props: any) => (<div className={styles.tabListContainer}>{props.children}</div>);
export const TabsBody = (props: any) => (<div className={styles.tabContentContainer}>{props.children}</div>);
