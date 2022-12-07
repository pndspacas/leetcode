/* Given an integer x, return true if x is a palindrome, and false otherwise. */

let isPalindrome = function(x) {
    return x.toString().split("").reverse().join("") == x ? true : false
};
