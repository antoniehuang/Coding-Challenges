// CW

/*
Given an array of integers, return a new array with each value doubled.

Example:

[1,2,3] => [2,4,6]

*/

function maps(x) {

    doubled = []
    for (let i = 0; i < x.length; i++) {
        doubled.push(x[i] * 2)
    }
    return doubled
}

  // O(n)