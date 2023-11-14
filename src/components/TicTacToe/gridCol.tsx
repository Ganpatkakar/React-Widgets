import React from 'react';
import styles from './ticTacToe.scss';

export default function GridCol(props: any) {
    const {col, colIndex, rowIndex} = props;

    return (
        <div className={styles.gridCol} data-row={rowIndex} data-col={colIndex}>{col}</div>
    )
}