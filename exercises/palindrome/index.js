// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
}

// NOTE: The every method will iterate over EVERY index, so that means it will repeat itself (in this case) once it passes the middle of the array

module.exports = palindrome;

// Solution 1
// function palindrome(str) {
//     let reversed = str.split('').reduce((rev, char) => char + rev, '')

//     return str === reversed;
// }

// SOLUTION TWO
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1]
//     })
// }