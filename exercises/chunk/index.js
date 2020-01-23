// --- Directions
// Given an array and chunk size, divide the array into many sub arrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = [];
    let index = 0;

    while(index < array.length) {
        // take the chunk between the index and the 'index+size' and push it into chunked
        // the second argument in slice method refers to the index, but doesn't include it in chunk
        chunked.push(array.slice(index, index + size));
        // increment index by the size to move to the starting point of the next chunk
        index += size;
    }

    return chunked;
}

module.exports = chunk;

// SOLUTION ONE:
// function chunk(array, size) {
//     // initialize a new empty array
//     let arrays = [];
//     // loop through the entire length of array
//     while(array.length) {
//         // each time the array.length reached the size argument, it will break that piece into its own array
//         // those chunks are then pushed into the new array
//         arrays.push(array.splice( 0, size ));
//     }
//     // don't forget to return the array
//     return arrays;
// }

// SOLUTION TWO:
// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         // retrieve the last element in the array
//         const last = chunked[chunked.length - 1]
//         console.log('last: ', last)
//         // if last doesn't exist or if last is equal to chunk size
//         if (!last ||  last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element)
//         }
//     }
//     console.log('chunked: ', chunked)
//     return chunked;
// }

// SOLUTION THREE (similar to my solution)
// function chunk(array, size) {
//     let chunked = [];
//     let index = 0;

//     while(index < array.length) {
//         // take the chunk between the index and the 'index+size' and push it into chunked
//         // the second argument in slice method refers to the index, but doesn't include it in chunk
//         chunked.push(array.slice(index, index + size));
//         // increment index by the size to move to the starting point of the next chunk
//         index += size;
//     }

//     return chunked;
// }