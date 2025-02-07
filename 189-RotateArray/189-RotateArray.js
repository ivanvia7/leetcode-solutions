/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

let n = nums.length;
k = k % n;

let removedElements = nums.splice(n-k, k)

nums.unshift(...removedElements)

return nums;

};