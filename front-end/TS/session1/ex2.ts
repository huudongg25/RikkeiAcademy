const isCheckMatchingBracket = (str: string): boolean => {
  const stack: string[] = [];
  const opening: string[] = ["(", "[", "{"];
  const closing: string[] = [")", "]", "}"];
  for (let i = 0; i < str.length; i++) {
    if (opening.includes(str[i])) {
      stack.push(str[i]);
      console.log("stack", stack);
    } else if (closing.includes(str[i])) {
      const matchBrackets = opening[closing.indexOf(str[i])];
      console.log(stack.pop());

      if (stack.length === 0 || stack.pop() !== matchBrackets) {
        console.log("stack", stack);
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isCheckMatchingBracket("({}[))"));