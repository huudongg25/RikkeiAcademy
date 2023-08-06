class Animal {
    static staticOK: string = "OK static"
    constructor(age: any, name: any) {
        this.age = age
        this.name = name

    }
    protected test: any = "OK Protected"
    public gretting: any = "Hello"
    private age: any
    private name: any
    readonly bookName: any = "Sách"
    getMyName(name: any) {
        return this.name = name
    }

    public set SetName(v: any) {
        [this.name, this.age] = v.split(" ");
    }


    public set SetGreeting(v: string) {
        this.gretting = v;
    }

    public get GetName(): any {
        return [this.name, this.age]
    }

}

const Chicken = new Animal(22, "aa")
Chicken.gretting = "Hihi"
Chicken.SetName = "Đồ ngôk"
Chicken.SetGreeting = "Hello Chú bé đần"
console.log(Chicken.gretting);
console.log(Chicken.getMyName("Ok"));
console.log(Chicken.bookName);
