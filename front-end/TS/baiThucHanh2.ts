interface Test {
    [key:string]:any
}
const handleCountWord = (text: string) => {
    const result: Test = {}

    for (let i: number = 0; i < text.length; i++) {
        if (!result[text[i]]) {
            result[text[i]] = 1
        } else {
            result[text[i]] += 1
        }
    }

    return result
}

console.log(handleCountWord("hello world"));
