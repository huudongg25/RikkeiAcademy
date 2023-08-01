function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charCount = {};
  
    // Đếm số lần xuất hiện của các ký tự trong chuỗi thứ nhất
    for (let char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Kiểm tra số lần xuất hiện của các ký tự trong chuỗi thứ hai
    for (let char of str2) {
      // Nếu ký tự không tồn tại trong charCount hoặc số lần xuất hiện đã bằng 0, không phải từ hoán vị
      if (!charCount[char]) {
        return false;
      }
      // Giảm số lần xuất hiện của ký tự trong charCount
      charCount[char]--;
    }
  
    // Nếu tất cả các ký tự trong chuỗi thứ hai đều xuất hiện đúng số lần trong chuỗi thứ nhất, là từ hoán vị
    return true;
  }
  
  // Kiểm tra các ví dụ
  console.log(validAnagram('aaz', 'zza')); 
  console.log(validAnagram('anagram', 'nagaram')); 
  console.log(validAnagram('rat', 'car')); 
  console.log(validAnagram('texttwisttime', 'timetwisttext')); 