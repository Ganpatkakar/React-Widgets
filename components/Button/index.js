import React from 'react';
import styles from './index.module.scss';

export default function index({text, onClick: handleClick}) {
  return (
    <button className={styles.button} onClick={handleClick}>{text}</button>
  )
}
