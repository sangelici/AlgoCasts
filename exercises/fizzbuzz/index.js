// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
}

module.exports = fizzBuzz;


// ATTEMPT
// I had it right, but i couldn't pass the tests for whatever reason.
// One thing I could improve is the order of conditions in the if statement
// function fizzBuzz(n) {
//     for ( let i = 1; i < n; i++ ) {
//         if ( i % 3 === 0) {
//             console.log('fizz')
//         } else if ( i % 5 === 0 ) {
//             console.log('buzz')
//         } else if ( i % 3 === 0 && i % 5 === 0 ) {
//             console.log('fizzbuzz')
//         }
//         return(i)
//     }
// }

// SOLUTION
// function fizzBuzz(n) {
//     for ( let i = 1; i <= n; i++ ) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }