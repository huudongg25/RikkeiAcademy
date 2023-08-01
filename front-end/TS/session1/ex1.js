"use strict";
const checkTotalItem = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};
console.log(checkTotalItem([2, 3, 6, 7, 1, 4], 5));
