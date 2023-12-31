"use strict";
const isCheckMatchingBracket = (str) => {
    const stack = [];
    const opening = ["(", "[", "{"];
    const closing = [")", "]", "}"];
    for (let i = 0; i < str.length; i++) {
        if (opening.includes(str[i])) {
            stack.push(str[i]);
        }
        else if (closing.includes(str[i])) {
            const matchBrackets = opening[closing.indexOf(str[i])];
            if (stack.length === 0 || stack.pop() !== matchBrackets) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
console.log(isCheckMatchingBracket("({}[]{)"));
