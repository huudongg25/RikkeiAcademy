

function findMax(arr: number[]): number {
  if (arr.length === 1) {
    return arr[0];
  }

  const mid = Math.floor(arr.length / 2);
  const leftMax = findMax(arr.slice(0, mid));
  const rightMax = findMax(arr.slice(mid));

  return Math.max(leftMax, rightMax);
}

const arr = [4, 7, 2, 9, 1, 5, 10];
const maxElement = findMax(arr);
console.log(maxElement); // Output: 10