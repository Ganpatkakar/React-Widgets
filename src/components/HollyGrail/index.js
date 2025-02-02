import React from 'react';
import styles from "./Grail.Module.scss";

export function GrailComponent() {
  return (
    <div className={styles.pageContainer}>
      <header>Header</header>
      <div className={"container"}>
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </div>
  );
}