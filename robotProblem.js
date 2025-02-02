const { traverse } = require("@babel/types");

/**
 * Given two inputs,

First input is the location map, a 2D array

        X
  | O | E | E | E | X | 
X | E | O | X | X | X |
  | E | E | E | E | E |
  | X | E | O | E | E |
  | X | E | X | E | X | 
        X
   
//    [2, 2, 1, 3]

O = Robot, E = Empty, X = Blocker
three blockers


O(row * col) * (m + n)


Second input is the query. It’s a 1D array consisting of distance to the closest blocker in the order from left, top, bottom and right

[2, 2, 4, 1] -> This means distance of 2 to the left closest blocker, 2 to the top closest blocker, 4 to the bottom closest blocker and 1 to the right closest blocker

Write a function that takes these two inputs and returns the index of the robots (if any) that matches the query that we’re looking for.
 * 
 * 
 * touching walls
 * hitting a blocker in between or robot
 * if there is no robot match the query
 * 
 * 
 * [['O','E','E','E','X'],['E','O','X','X','X'],['E','E','E','E','E'],['X','E','O','E','E'],['X','E','X','E','X']]

 * 
 */
const Robot = 'O';
const Empty = 'E';
const Blocker = 'X';

function GetRobot(grid, query) {
    const rowLen = grid.length;
    const colLen = grid.length;
    for(let i = 0; i < rowLen; i++) {
        for(let j = 0; j < colLen; j++) {
            if (grid[i][j] == Robot && IsQueryMatches(grid, i, j, query)) return [i, j];
        }
    }
    return [-1, -1];
}

function IsQueryMatches(grid, row, col, query) {
    const [left, top, bottom, right] = query;
    
    console.log(row, col, query);
    console.log(traveseTop(grid, row, col, top));
    console.log(traverseLeft(grid, row, col, left));
    console.log(traverseBottom(grid, row, col, bottom));
    console.log(traveseright(grid, row, col, right));

    if (!(traveseTop(grid, row, col, top) && traverseLeft(grid, row, col, left) && traverseBottom(grid, row, col, bottom) && traveseright(grid, row, col, right))) return false;
    
    return true;
}

function traveseTop(grid, row, col, top) {
    for(var i = row - 1; i >= 0 && i >= row - top; i--) {
         if (grid[i][col] != Empty) return true;
    }
    if (i < 0) return true;
    return false;
}

function traverseLeft(grid, row, col, left) {
    for(var i = col - 1; i >= 0 && i >= col - left; i--) {
        console.log(i);
        if (grid[row][i] != Empty) return true;
    }
    if (i < 0) return true;
    return false;
}

function traverseBottom(grid, row, col, bottom) {
    const rowLen = grid.length;
    for(var i = row + 1; i < rowLen && i <= row + bottom; i++) {
         if (grid[i][col] != Empty) return true;
    }
    if (i >= rowLen) return true;
    return false;
}

function traveseright(grid, row, col, right) {
    const colLen = grid.length;
    for(var i = col + 1; i < colLen && i <= col + right; i++) {
         if (grid[row][i] != Empty) return true;
    }
    if (i >= colLen) return true;
    return false;
}

const grid = [
    ['O','E','E','E','X'],
    ['E','O','X','X','X'],
    ['E','E','E','E','E'],
    ['X','E','O','E','E'],
    ['X','E','X','E','X']
];
const query =  [2, 2, 4, 1];

console.log(GetRobot(grid, query));