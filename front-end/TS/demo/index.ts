// class Bank {
//     private money: number
//     private numberAccount: number
//     constructor(money: number, numberAccount: number) {
//         this.money = money
//         this.numberAccount = numberAccount
//     }
//     getMoney(accNumber: number): number | string {
//         if (accNumber == this.numberAccount) {
//             return this.money
//         } else {
//             return "Wrong account number"
//         }
//     }

// }

// const huuDongAcc = new Bank(10000, 1234)
// console.log(huuDongAcc.getMoney(1234))

// class Animal {
//     speak() {
//         return 'Gâu gâu'
//     }
// }

// class Cat extends Animal {
//     eat() {
//         return 'Cá'
//     }
//     speak(): string {
//         return 'ok'
//     }
// }

// const cat = new Cat()

// console.log(cat.speak())

// abstract class IPhone {
//     battery: number
//     constructor(batteryNumber: number) {
//         this.battery = batteryNumber
//     }
//     chargeBattery(): void {
//         this.battery = 100
//     }

//     abstract getBattery(data: string): number
// }

// class IPhone12 extends IPhone {
//     getBattery(data: string): number {
//         return 10
//     }
// }

class Animal {
    name: string;
    legs: number;

    constructor(name: string, legs: number);
    constructor(name: string);
    constructor(name: string, legs?: number) {
        this.name = name;
        this.legs = legs || 0; 
    }
}

const dogs = new Animal("Dog", 4); 
const snakes = new Animal("Snake"); 

console.log(dogs);
console.log(snakes);
