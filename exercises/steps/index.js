// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// default row to start on first row
// default stair as an empty string
function steps(n, row = 0, stair = '') {
    // Base Case
    // if (row === end), we've hit the end of our problem
    if (n === row) {
        return;
    }

    // if the 'stair' string has a length === n, then we are at the end of a row
    if (n === stair.length) {
        console.log(stair);
        // increase to the next row
        return steps(n, row + 1);
    }

    // if the length of the 'stair' string is <= the row num we're working on, we add '#', otherwise we add a space
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';,
    }

    steps(n, row, stair)
}

module.exports = steps;

// SOLUTION ONE: My function works but i can't pass the tests? Not sure why
// function steps(n) {
//     console.log(n);

//     // Step 1: initialaize an array
//     let stack = [];

//     // Step 2: create a for loop that iterates up to 'n'
//     for (let i = 0; i <= n - 1; i++) {
//       // for each iteration, add cooresponding '#' 'i' times
//       let pound = "#".repeat(i + 1);
//       // console.log(pound);

//       // add remaining spaces equal to 'i' - 1 so the length is = to 'n'
//       let remainingSpaces = pound + "-".repeat(n - (i + 1));
//       // console.log(remainingSpaces);

//       // push values into stack array
//       stack.push(remainingSpaces);

//       // Step 3: join the array and use '\n' to set each value on its own line
//       console.log(stack.join("\n"));
//     }
// }

// SOLUTION TWO: console.logs out each stair, but I'm hesitant because it's quadratic time -> 0(n^2)
// function steps(n) {
//     for (let row = 0; row <= n - 1; row++) {
//         let stair = '';

//         for (let col = 0; col < n; col++ ) {
//             if (col <= row) {
//                 stair += '#'
//             } else {
//                 stair += " "
//             }
//         }
//         // keep console.log within outer for loop
//         // one console.log for each row we are attempting to build
//         console.log(stair)
//     }
// }

// SOLUTION THREE: recursion
// function steps(n, row = 0, stair = '', ) {
//     // Base Case
//     // if (row === end), we've hit the end of our problem
//     if (n === row) {
//         return;
//     }

//     // if the 'stair' string has a length === n, then we are at the end of a row
//     if (n === stair.length) {
//         console.log(stair);
//         // increase to the next row
//         return steps(n, row + 1);
//     }

//     // if the length of the 'stair' string is <= the row num we're working on, we add '#', otherwise we add a space
//     if (stair.length <= row) {
//         stair += '#';
//     } else {
//         stair += ' ';
//     }

//     steps(n, row, stair)
// }