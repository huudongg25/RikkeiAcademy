class Bank {
    static test: number = 200
    protected money: number
    private idNumber: number
    readonly userName: string

    constructor(money: number, idNum: number, userName: string) {
        this.money = money
        this.idNumber = idNum
        this.userName = userName
    }

    getMoney(idNum: number): number | string {
        if (idNum !== this.idNumber) {
            return "Wrong your id"
        }
        return this.money
    }

    public get getMyMoney(): number {
        return this.money
    }


    public set setMyMoney(v: number) {
        this.money = v
    }


}

const myBank = new Bank(1000000, 1998, "Huu Dong")
myBank.setMyMoney = 30000
console.log(myBank.getMoney(1222));

// class Bank2 extends Bank {
//     getMoney(): number {
//         return this.money
//     }
// }

// const huuDong = new Bank2(2000, 1234, "huudong")

// console.log(huuDong.getMoney());

// console.log(Bank2.test);