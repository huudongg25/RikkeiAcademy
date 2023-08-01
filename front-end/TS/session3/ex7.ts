function minSubArrayLen(nums: number[], target: number): number {
    let minLength = Infinity;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Test
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // Output: 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // Output: 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // Output: 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // Output: 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // Output: 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // Output: 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // Output: 0
