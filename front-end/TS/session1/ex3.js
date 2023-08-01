"use strict";
function isPalindrome(text) {
    const lowerCaseString = text.toLowerCase();
    const cleanedString = lowerCaseString.replace(/[^a-z0-9]/g, '');
    return cleanedString === cleanedString.split('').reverse().join('');
}
const text1 = "A man, a plan, a canal, Panama";
const text2 = "race a car";
console.log(isPalindrome(text1));
console.log(isPalindrome(text2));
