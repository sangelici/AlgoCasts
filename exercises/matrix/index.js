// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // initialize main array
    const results = [];

    for (let i = 0; i < n; i ++) {
        // creates arrays inside array
        results.push([]);
    }
    // console.log(results)

    // initialize the counter
    let counter = 1;
    // initialize columns and rows to keep track of them
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startCol <= endCol && startRow <= endRow) {

        // Top row
        for ( let i = startCol; i <= endCol; i++){
            // set i in startRow to counter
            results[startRow][i] = counter;
            // increment counter
            counter++;
        }
        // outside the for loop, increment startRow
        startRow++;

        // Rigth Column
        for (let i = startRow; i <= endRow; i++) {
            // set i in the endCol to counter
            results[i][endCol] = counter;
            // increment counter
            counter++;
        }
        // decrement endCol
        endCol--;

        // Bottom Row
        for (let i = endCol; i >= startCol; i--) {
            // decrement through i in the endRow as the counter
            results[endRow][i] = counter;
            // increment counter
            counter++;
        }
        // decrement endRow
        endRow--;

        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        }
        // Increment start column
        startCol++;

    }

    return results;
}

module.exports = matrix;
