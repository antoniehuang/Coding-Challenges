// CW

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

function squareSum(numbers) {
    let squared = numbers.map(elem => Math.pow(elem, 2))
    return squared.reduce((a, b) => a + b, 0)
}