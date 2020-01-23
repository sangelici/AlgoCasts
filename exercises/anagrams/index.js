// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity.
// Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
}



anagrams("hey there!", "yer heeth")

module.exports = anagrams;

// My SOLUTION: EXTREMELY LONG
// function anagrams(stringA, stringB) {
//     // Step 1: initialize an empty object for both strings
//     let objA = {};
//     let objB = {};

//     // Step 2: remove any spaces or punctuation from strings
//     let newStrA = stringA.replace(/[^\w]/g, '');
//     let newStrB = stringB.replace(/[^\w]/g, '');

//     // Step 3: split the strings into an object with char keys and numerical values
//     for (let char of newStrA) {
//         objA[char] = objA[char] + 1 || 1
//     }

//     for (let char of newStrB) {
//         objB[char] = objB[char] + 1 || 1
//     }

//     // Step 4: compare the length of each object keys
//     if (Object.keys(objA).length !== Object.keys(objB).length) {
//         // if they don't match, return false (not an anagram)
//         return false
//     }

//     // Step 5: compare the keys to see if they are the same
//     let objKeysA = Object.keys(objA).sort().join('')
//     let objKeysB = Object.keys(objB).sort().join('')

//     if (objKeysA !== objKeysB) {
//          // if they don't match, return false (not an anagram)
//         return false
//     }

//     // Step 6: compare the values of each key to see if they are the same
//     let objValuesA = Object.values(objA).sort((a, b) => a - b).join('')
//     let objValuesB = Object.values(objB).sort((a, b) => a - b).join('')

//     if (objValuesA !== objValuesB) {
//         // if they don't match, return false (not an anagram)
//         return false
//     } else {
//          // if they match, return true (an anagram!!)
//         return true
//     }
// }

// MORE CONDENSED SOLUTION
// // Step 1: helper function
// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = char + 1 || 1
//     }

//     return charMap
// }

// function anagrams(stringA, stringB) {
//     // Step 2: invoke helper function on both string arguments
//     const charMapA = buildCharMap(stringA)
//     const charMapB = buildCharMap(stringB)

//     // Step 3: compare the length of each object keys
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false
//     }

//     // Step 4: compare the keys and values to see if they are the same
//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false
//         }
//     }

//     // Step 5: it's an anagram! return true
//     return true
// }