const checkSumTarget = (nums: number[], target: number): number[] => {
    let result: number[] = []

    for (let i:number = 0; i < nums.length - 1; i++) {
        for (let j:number = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i, j)
            }
        }
    }
    return result
}
console.log(checkSumTarget([3, 5, 7, 3, 6], 12));
