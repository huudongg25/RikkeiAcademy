function isSubarray(A: number[], B: number[]): boolean {
  if (A.length < B.length) return false;

  // Đếm số lượng xuất hiện của mỗi phần tử trong mảng A
  const frequencyCounterA: Record<number, number> = {};

  for (const num of A) {
    frequencyCounterA[num] = (frequencyCounterA[num] || 0) + 1;
  }

  // Kiểm tra mảng B có phải là mảng con của mảng A không
  for (const num of B) {
    if (!frequencyCounterA[num]) {
      return false;
    }
    frequencyCounterA[num]--;
  }

  return true;
}

const A1 = [1, 2, 3, 4, 5];
const B1 = [2, 3];
console.log(isSubarray(A1, B1)); // Output: true

const A2 = [1, 2, 3, 4, 5];
const B2 = [2, 3, 6];
console.log(isSubarray(A2, B2)); // Output: false