// CW

/*
Complete the solution so that it returns true if the first argument(string)
passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

function solution(str, ending) {
    let slicedString = str.slice(-(ending.length))
    if (ending === '') {
        return true
    }
    else if (slicedString === ending) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

// Better Solution
function solution2(str, ending) {
    return str.endsWith(ending);
}