function countUniqueValues(arr:number[]) {
  // Nếu mảng rỗng, không có giá trị duy nhất
  if (arr.length === 0) {
    return 0;
  }

  // Sử dụng hai con trỏ để so sánh các giá trị trong mảng
  let left = 0;
  let right = 1;

  // Biến để lưu số giá trị duy nhất
  let uniqueCount = 1;

  while (right < arr.length) {
    // Nếu giá trị ở vị trí left khác với giá trị ở vị trí right, đó là một giá trị duy nhất
    if (arr[left] !== arr[right]) {
      uniqueCount++;
      // Di chuyển con trỏ left sang vị trí right
      left = right;
    }
    // Di chuyển con trỏ right sang vị trí tiếp theo
    right++;
  }

  return uniqueCount;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); 
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); 
console.log(countUniqueValues([-2, -1, -1, 0, 1])); 
