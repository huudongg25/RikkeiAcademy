function sameFrequency(num1: number, num2: number): boolean {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    const frequency1: { [key: string]: number } = {};
    const frequency2: { [key: string]: number } = {};

    for (const char of str1) {
        frequency1[char] = (frequency1[char] || 0) + 1;
    }

    for (const char of str2) {
        frequency2[char] = (frequency2[char] || 0) + 1;
    }

    for (const key in frequency1) {
        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(182, 281)); // Output: true
console.log(sameFrequency(34, 14)); // Output: false
console.log(sameFrequency(3589578, 5879385)); // Output: true
console.log(sameFrequency(22, 222)); // Output: false
