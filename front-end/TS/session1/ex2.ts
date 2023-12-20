const isCheckMatchingBracket = (str: string) => {
  const stack: string[] = [];

  const opening: string[] = ["(", "[", "{"];
  const closing: string[] = [")", "]", "}"];

  for (let i: number = 0; i < str.length; i++) {
    if (opening.includes(str[i])) {
      stack.push(str[i]);
      // stack = ['(','{']
    } else if (closing.includes(str[i])) {
      const matchBrackets = opening[closing.indexOf(str[i])]; // {
      // }
      if (stack.length === 0 || stack.pop() !== matchBrackets) {
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
};

console.log(isCheckMatchingBracket("({}[))"));
console.log(isCheckMatchingBracket("]({})"));
console.log(isCheckMatchingBracket("({}){}"));