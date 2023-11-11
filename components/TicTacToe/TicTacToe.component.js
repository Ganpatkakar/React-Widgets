import React, { useState } from "react";
import GridRow from './GridRow.component';

const gridInitialState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]

const winningCombinations = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["20", "11", "02"]
]

const checkWin = (grid, player) => {
    for(let combination of winningCombinations) {
        let won = true;
        for(let rowCol of combination) {
            const [row, col] = rowCol.split("");
            if(grid[row][col] !== player) {
                won = false;
            }
        }
        if (won) {
            return true;
        }
    }
    return false;
}

const draw = (grid) => {
    let len = 0
    grid.forEach(element => {
        const filter = element.filter(val => val !== '');
        len += filter.length;
    });
    if (len >= 9) {
        return true;
    }
    return false;
}

const useGrid = () => {
    const [grid, setGrid] = useState([...gridInitialState]);
    const [player, setPlayer] = useState("x");
    const [gameOver, setGameOver] = useState(false);

    const manageGrid = (row, col) => {
        const rowData = [...grid[row]];
        rowData[col] = player;
        grid[row] = [...rowData];
        setGrid([...grid]);

        if (checkWin(grid, player)) {
            setGameOver(true);
        } else if (draw(grid)) {
            reset()
        } else {
            if (player === 'x') {
                setPlayer('o');
            } else {
                setPlayer('x');
            }
        }
    }

    const reset = () => {
        setGrid([...gridInitialState]);
        setPlayer("x");
        setGameOver(false);
    }

    return [gameOver, player, grid, manageGrid, reset];
}

export default function TicTacToeComponent () {

    const [gameOver, player, grid, manageGrid, reset] = useGrid();

    const handleClick = (event) => {
        event.preventDefault();
        const target = event.target;
        if (!target.dataset.hasOwnProperty("row")) {
            return;
        }
        if (target.innerText !== '') {
          return;
        }
        const row = parseInt(target.dataset.row);
        const col = parseInt(target.dataset.col);
        if (grid[row][col] !== "") {
            return;
        }
        manageGrid(row, col)
    }

    if (gameOver) {
        return (
            <>
                <div>Player Won: = {player}</div>
                <button onClick={reset}>Reset</button>
            </>
        )
    }

    return (
        <>
            <div>Current player turn:= {player}</div>
            <div className="gameContainer" onClick={handleClick}>
                {
                    grid.map((row, rowIndex) => {
                        return <GridRow key={rowIndex} row={row} rowIndex={rowIndex} />
                    })
                }
            </div>
        </>
    )
}
