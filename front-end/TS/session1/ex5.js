"use strict";
function maxTotalSubArr(nums) {
    let maxSub = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxSub = Math.max(nums[i], maxSub + nums[i]);
        console.log("maxSub", maxSub);
        max = Math.max(max, maxSub);
        console.log("max", max);
    }
    return max;
}
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxTotalSubArr(nums));
