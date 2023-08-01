
function findPairsWithSum(arr: number[], targetSum: number): [number, number][] {
  const pairs: [number, number][] = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === targetSum) {
      pairs.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return pairs;
}

const sortedArray = [1, 2, 3, 4, 6, 8, 9, 11];
const target = 10;
const pairs = findPairsWithSum(sortedArray, target);
console.log(pairs); // Output: [[1, 9], [2, 8], [4, 6]]