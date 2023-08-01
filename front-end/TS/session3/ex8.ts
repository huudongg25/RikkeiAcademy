function findLongestSubstring(str: string): number {
    let maxLength = 0;
    let start = 0;
    const seen: { [key: string]: number } = {};

    for (let end = 0; end < str.length; end++) {
        const char = str[end];

        if (seen[char] !== undefined && seen[char] >= start) {
            start = seen[char] + 1;
        }

        seen[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(findLongestSubstring('')); // Output: 0
console.log(findLongestSubstring('rithmschool')); // Output: 7
console.log(findLongestSubstring('thisisawesome')); // Output: 6
console.log(findLongestSubstring('thecatinthehat')); // Output: 7
console.log(findLongestSubstring('bbbbbb')); // Output: 1
console.log(findLongestSubstring('longestsubstring')); // Output: 8
console.log(findLongestSubstring('thisishowwedoit')); // Output: 6
