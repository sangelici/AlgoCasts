// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    // base case
    if (n === row) {
        return;
    }

    // if # of columns = the length of the string
    if (level.length === 2 * n - 1) {
        console.log(level)
        // loop again
        return pyramid(n, row + 1);
    }

    // initializes midpoint
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;

    // if the string hasn't been finished
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = "#";
    } else {
        add = " ";
    }

  pyramid(n, row, level + add);
}

module.exports = pyramid;

// SOLUTION ONE:
// function pyramid(n) {

//     // set midpoint of string (only need to define once)
//     const midpoint = Math.floor((2 * n - 1) / 2)

//     // loop through the # of rows ( total rows = n )
//     for (let row = 0; row < n; row++) {
//         // initialize an empty string
//         let level = '';

//         // loop through the columns (pattern is 3, 5, 7, 9, etc...)
//         for (let col = 0; col < 2 * n - 1; col++) {
//             // if the index[-1] is less than the col
//             // OR
//             // if the index[+1] is more than the col
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 level += '#';
//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)
//     }
// }

// SOLUTION TWO: RECURSION
// function pyramid(n, row = 0, level = '') {
//     // base case
//     if (n === row) {
//         return;
//     }

//     // if # of columns = the length of the string
//     if (level.length === 2 * n - 1) {
//         console.log(level)
//         // loop again
//         return pyramid(n, row + 1);
//     }

//     // initializes midpoint
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     let add;
    
//     // if the string hasn't been finished
//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = "#";
//     } else {
//         add = " ";
//     }

//   pyramid(n, row, level + add);
// }
