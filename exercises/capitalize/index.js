// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {}

module.exports = capitalize;

// SOLUTION ONE:
// function capitalize(str) {
//     // initialize an empty array
//     let words = []

//     // iterate over each word in the string(that gets split)
//     for (let word of str.split(' ')) {
//         // capitalize the first letter of the word plus the remaining letters
//         // push into words array
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }

//     // return words array with spaces in between
//     return words.join(' ')
// }

//  SOLUTION TWO
// function capitalize(str) {
//     let result = str[0].toUpperCase();

//     for (let i = 1; i < str.length; i++) {
//         if (str[i-1] === ' ') {
//             result += str[i].toUpperCase()
//         } else {
//             result += str[i]
//         }
//     }

//     return result;
// }
