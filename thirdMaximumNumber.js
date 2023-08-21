/* Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number. */

let thirdMax = function(nums) {
    let arr = []
    let repeats = []
    let frequencyMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (frequencyMap[nums[i]] === undefined) {
            frequencyMap[nums[i]] = 1;
            arr.push(nums[i]);
        } else if (frequencyMap[nums[i]] === 1) {
            frequencyMap[nums[i]] = 2;
            repeats.push(nums[i]);
        }
    }
    arr.sort((a, b) => b - a )
    return arr.length > 2 ? arr[2] : Math.max(...arr)
};
