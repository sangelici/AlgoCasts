// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
}

module.exports = maxChar;

// SOLUTION
// function maxChar(str) {
//     // create an empty object
//     let chars = {};
//     // set the intial max to 0
//     let max = 0;
//     // set the maxChar as an empty string
//     let maxChar = ''

//     // iterate through each character of the string
//     for (let char of str) {
//       // set the value to chars[char]
//       // if that char value is greater than 1, add 1
//       // if that char hasn't been counted before, set it to 1
//         chars[char] = chars[char] + 1 || 1
//         // EX:
//         // "hello" -> { "h":1, "e":1, "l":2, "o":1 }
//     }
//     console.log(chars)

//     // iterate through the chars object char key ('in' is for objects)
//     // will iterate and compare each value in the object until it has found the maxChar
//     for (let char in chars) {
//         // if char is greater than max (initial = 0)
//         if (chars[char] > max) {
//             // set max as the char amount
//             max = chars[char];
//             // set the char as the maxChar
//             maxChar = char
//         }
//     }

//     return maxChar
// }