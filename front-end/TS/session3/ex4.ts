function areThereDuplicates(...args: any[]): boolean {
    const frequencyCounter: { [key: string]: number } = {};

    for (const val of args) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }

    for (const key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true;
        }
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // Output: false
console.log(areThereDuplicates(1, 2, 2)); // Output: true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // Output: true