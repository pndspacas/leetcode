/* Given a string s consisting of words and spaces, return the length of the last word in the string. */

let lengthOfLastWord = function(s) {
    let trim = s.trim()
    let string = trim.split(" ")
    let slice = string.slice(-1)
    let joined = slice.join("")
    return joined.length
};
