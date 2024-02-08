import React, { Children } from 'react';
import styles from "./tabs.scss";
import { TabsContext } from './tabs';

interface ITabContent {
    children: any;
    value: string | number;
}
export function TabContent(props: ITabContent) {
    const {children, value} = props;
    const {activeTab} = React.useContext(TabsContext);

    return (
        <div style={{display: `${activeTab === value ? 'block' : 'none'}`}} className={styles.tabContent}>{children}</div>
    )
}