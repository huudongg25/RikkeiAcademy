interface Count {
    [key: string]: number;
}

const countWord = (text: string): Count => {
    const result: Count = {}
    for (let i = 0; i < text.length; i++) {
        if (!result[text[i]]) {
            result[text[i]] = 1
        } else {
            result[text[i]] += 1
        }
    }

    return result
}
let abc: number = 0

console.log(countWord("aloo cau ca"));
