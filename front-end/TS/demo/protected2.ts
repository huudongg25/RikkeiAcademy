class Bank {
    public name:string
    private stk:number
    private money:number

    constructor(name:string,stk:number,money:number) {
        this.name = name 
        this.money = money
        this.stk = stk
    }
    getMoney(stk:number):number | string {
        if(stk === this.stk) {
            return this.money
        }else {
            return "Sai stk"
        }
    }
    
    public set setStk(v : number) {
        if(v.toString().length > 4 ) {
            this.stk = v;
        }
    }
    
    public getStk() : number {
        return this.stk
    }
    
 }

 const huuDong = new Bank("huu dong",1234,10000)
 console.log(huuDong.getMoney(1234));
//  huuDong.setStk(1234)
 console.log(huuDong.getStk);