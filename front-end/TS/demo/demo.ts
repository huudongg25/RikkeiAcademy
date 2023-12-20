class Person {
    //access modifier : public (mặc định) , private , protected ,readonly
    //Thuộc tính => Định nghĩa các hình thái, trạng thái và tính chất của 1 đối tượng
    public name: string
    public age: number
    public gender: string
    //constructor (hàm khởi tạo) => gán giá trị cho các thuộc tính khi khởi tạo
    constructor(name: string, age: number, gender: string);
    constructor(name: string, age: number);
    constructor(name: string, age: number, gender?: string) {
        this.age = age
        this.name = name
        this.gender = gender || "Unknow"
    }

    //Phương thức => Định nghĩa những cái khả năng, hành động và hành vi của đối tượng
    eat(data: string): void {
        console.log(`eating...${data}`);
    }

}

//Khởi tạo 1 instance => sử dụng từ khoá new 
const person1 = new Person("Huu Dong", 20)
const person2 = new Person("Peter", 20, "Nam")

console.log(person1['gender']);
console.log(person2.test());