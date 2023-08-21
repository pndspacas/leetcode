/*You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise. */

let dominantIndex = function(nums) {
  let indexOfMax = nums.indexOf(Math.max(...nums))
    let max = Math.max(...nums)
    let sorted = nums.sort((a, b) => a - b)
    let arr = []
    for (let i = 0; i < sorted.length - 1; i++) {
        if (max >= sorted[i] * 2) {
            arr.push(indexOfMax)
        } else {
            arr.push(-1)
        }
    }
    return arr[arr.length - 1]

}
