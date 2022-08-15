// CW

/*
Complete the solution so that the function will break up camel casing, using a space between words.

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    let result = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            result += ' '
            result += string[i]
        }
        else {
            result += string[i]
        }
    }
    return result
}
