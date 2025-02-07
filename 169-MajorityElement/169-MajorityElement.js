/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

 let maxCount = 1; let currentCount = 1; let mostFrequentNum = nums[0];

 nums.sort((a,b) => a - b)

for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
        currentCount++;
    } else {
        currentCount = 1;
    }

    if (currentCount > maxCount) {
        maxCount = currentCount;
        mostFrequentNum = nums[i]
    }

}

return mostFrequentNum;

};