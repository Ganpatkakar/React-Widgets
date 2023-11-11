import GridCol from './GridCol.component';
import styles from './TicTacToe.module.scss';

export default function GridRow(props) {
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