// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

// MY SOLUTION: SOLUTION ONE
// function reverseInt(n) {
//     let sign = Math.sign(n)
//     let str = n.toString()
//     let reversed = str.split('').reduce((rev, char) => char + rev, '')
//     let revNum = parseInt(reversed)

//     if (sign === -1) {
//        return revNum * -1
//     } else {
//         return revNum
//     }
// }