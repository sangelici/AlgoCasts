// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
}

module.exports = vowels;

// SOLUTION ONE: IT WORKS IN SANDBOX BUT DOESN'T PASS TEST?
// function vowels(str) {
//     console.log(str); -> "hello there"
//     let vowel = str.match(/[a,e,i,o,u]/g);
//     console.log(vowel); -> ["e", "o", "e", "e"]
//     console.log(vowel.length); -> 4
//     return vowel.length;
// }

// SOLUTION ONE.FIVE
// function vowels(str) {
//     // Search text with Regex and store all matching instances 
//     let vowel = str.toLowerCase().match(/[aeiou]/gi);

//     // Check if matching instances exist then calculate length
//     if(vowel) {
//         // Log formatted response to console 
//          console.log(`The text contains ${vowel.length} vowel(s)`) 

//          // Return number of vowels
//         return vowel.length
//     } else{
//         return 0
//     }
// }

// SOLUTION THREE
// function vowels(str) {
//     // global and case insensitive
//     const matches = str.match(/[aeiou]/gi)

//     return matches ? matches.length : 0
// }
