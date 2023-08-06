// let a: number = 0

// type calc = (a: number, b: number) => number

// function sum(callback: calc) {
//     callback(10, 20)
// }

// function test(a: number, b: number): number {
//     console.log(a + b);
//     return a + b
// }

// sum(test)


interface Animal {
    name: string;
    eat: () => void
}

interface Cat extends Animal {
    action(): void
}

const miuMiu: Cat = {
    name: "Miuuuu",
    eat() {
        console.log('eating');
    },
    action() {
        console.log('meomeo');
    }

}

function calc(a: number, b: number): number {
    return (a + b) * 2
}

console.log(calc(19, 21));


let string: string = 'Nguyễn Văn'
let string2: string = 'A'

function fullName(a: string, b: string): string {
    console.log(a + b);
    return `${a} ${b}`
}

fullName(string, string2)

let arr: number[] = [1, 2, 3, 4, 5, 6]

for (let i: number = 0; i < arr.length; i++) console.log(i);

class Pair<T, U> {
    constructor(public first: T, public second: U) { }
}

const numberAndStringPair = new Pair<number, string>(42, "hello");
const booleanAndObjectPair = new Pair<boolean, { name: string }>(true, { name: "John" });
