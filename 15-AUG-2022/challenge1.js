// CW

/*
You get an array of numbers, return the sum of all of the positive ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let positiveSum = 0;
    if (arr.length == 0) {
        return 0
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                positiveSum += arr[i]
            }
        }
        return positiveSum
    }
}