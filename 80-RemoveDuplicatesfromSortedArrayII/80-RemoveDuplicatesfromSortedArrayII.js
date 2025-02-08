/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    for (let j = 2; j < nums.length; j++) {
        if (nums[j] === nums[j - 1] && nums[j] === nums[j - 2]) {
            nums.splice(j, 1)
            j--;
        }
    }


    return nums.length

};