// Given an integer array, transform that array into a mirror.
// Examples

// mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

// mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

// mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]



function mirror(arr) {
    return arr.concat(arr.slice(0, arr.length - 1).reverse());
}

// Example usage:
console.log(mirror([0, 2, 4, 6]));    
console.log(mirror([1, 2, 3, 4, 5])); 
console.log(mirror([3, 5, 6, 7, 8])); 
