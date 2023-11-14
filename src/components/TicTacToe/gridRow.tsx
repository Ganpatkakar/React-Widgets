import React from 'react';
import GridCol from './gridCol';
import styles from './ticTacToe.scss';

export default function GridRow(props: any) {
    const {row, rowIndex} = props;

    return (
        <div className={styles.gridRow}>
            {
                row.map((col, colIndex) => {
                    return <GridCol key={colIndex} col={col} rowIndex={rowIndex} colIndex={colIndex}/>
                })
            }
        </div>
    )
}