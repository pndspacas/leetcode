/* Given a binary array nums, return the maximum number of consecutive 1's in the array.*/

let findMaxConsecutiveOnes = function(nums) {
   let arr = []
    let counter = 0


    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            counter++
            arr.push(counter)
        } else {
            counter = 0
            arr.push(counter)
        }
    };

    let max = arr.sort((a, b) => b - a)
    return max[0]
};
