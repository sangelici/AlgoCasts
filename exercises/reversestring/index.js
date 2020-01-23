// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
}


module.exports = reverse;

// SOLUTION 1:
// function reverse(str) {
//     // split word into an array of characters
//     let arr = str.split('');
//     // console.log(arr) -> ['h','e','l','l','o']

//     // reverse the order of the array
//     let reversedArr = arr.reverse();
//     // console.log(reversedArr) -> ['o','l','l','e','h']

//     // combine the letters back together into a string without ','
//     return reversedArr.join('');

//     // // OR
//     str.split('').reverse().join('')
// }

// SOLUTION 2 (w/o reverse method)
// function reverse(str) {
//     let reversed = '';

//     // for each iteration through the characters of str
//     for (let character of str) {
//         // set variable where each character gets added to reversed
//         // EX:
//             // reversed = 'h' + ''
//             // reversed = 'e' + 'h'
//             // reversed = 'l' + 'eh'
//             // reversed = 'l' + 'leh'
//             // reversed = 'o' + 'lleh'
//             // reversed = 'olleh'
//         reversed = character + reversed;
//     }

//     return reversed;
// }

// SOLUTION THREE
// function reverse(str) {
//     //  reduce method takes all the values in one array and condenses it into one value
//     return str.split('').reduce((rev, char) => char + rev, '')
// }
