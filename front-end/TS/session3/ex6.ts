function isSubsequence(str1: string, str2: string): boolean {
    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
        }

        if (i === str1.length) {
            return true;
        }

        j++;
    }

    return false;
}

// Test
console.log(isSubsequence('hello', 'hello world')); // Output: true
console.log(isSubsequence('sing', 'sting')); // Output: true
console.log(isSubsequence('abc', 'abracadabra')); // Output: true
console.log(isSubsequence('abc', 'acb')); // Output: false
