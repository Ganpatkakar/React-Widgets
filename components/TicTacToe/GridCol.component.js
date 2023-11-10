import React from 'react';
import styles from './TicTacToe.module.scss';

export default function GridCol(props) {
    const {col, colIndex, rowIndex} = props;

    return (
        <div className={styles.gridCol} data-row={rowIndex} data-col={colIndex}>{col}</div>
    )
}