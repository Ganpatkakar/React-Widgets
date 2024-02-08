import React, { useState } from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
// import styles from './styles.scss';

function GenerateData(gridX, gridY) {
    const res = [];
    for(let i = 0; i < gridX; i++) {
        res.push({activeColumns: [], length: gridY, id: uuidv4()});
    }
    return res;
}

const Row = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
`;

const Grid = styled.div`
    display: flex;
`;

const Column = styled.div<{ $active?: boolean; }>`
    display: block;
    height: 50px;
    width: 100%;
    border: 1px solid grey;

    ${(props) => {
        if (props.$active) {
          return `
            background-color: red
          `
        }
      }}
`;

function GridColumn({grid}) {
    const {length: len, activeColumns} = grid;
    const set = new Set(activeColumns);
    const columns = [];
    for(let i = 0; i < len; i++) {
        const active = set.has(i + 1);
        // columns.push(<div style={styles.columns}></div>);
        columns.push(<Column $active={active} />);
    }
    return columns
}

export function BuildingGrid({gridX= 10, gridY= 10}) {
    const data = GenerateData(gridX, gridY);
    const [state, setData] = useState(data);
    const columnsClickHandler = (id, index) => {
        let {activeColumns, length: len} = state[index];
        if (activeColumns.length) {
            if (activeColumns.length === len) {
                activeColumns = [];
            } else {
                activeColumns.push(activeColumns[activeColumns.length - 1] - 1);
            }
        } else {
            activeColumns.push(len);
        }
        const prevState = [...state];
        prevState[index] = {activeColumns, length: len}
        //console.log(index, prevState);
        setData([...prevState]);
        // setData((prev) => {
        //     prev[index] = {activeColumns, length: len}
        //     return [...prev];
        // });
    }
    
    return (
        <>
            <Grid>
                {
                    state.map((grid, index) => {
                        const {id} = grid;
                        return (
                            <Row key={id} onClick={() => columnsClickHandler(id, index)}>
                                <GridColumn grid={grid}/>
                            </Row>
                        )
                    })
                }
            </Grid>
        </>
    )
}