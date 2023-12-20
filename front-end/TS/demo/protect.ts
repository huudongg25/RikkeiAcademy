
class Users {
    //thuộc tính => định nghĩa trạng thái,tính chất của đối tượng
    // access modifier => public (mặc định), private ,protected , readonly
    /* 
        public: Truy xuất từ bất kì đâu trong code
        private: Phạm vi là ở trong Class => không thể truy xuất từ bên ngoài (Tính đóng gói)
        protected: Phạm vi là ở trong Class và các class con kế thừa có thể truy xuất (Tính đóng gói)
        readonly : Nó sẽ không thể gán lại => chỉ có thể khởi tạo ban đầu
    */
    readonly name: string
    public age: number
    public gender: string

    //Constructor(hàm tạo) => gán giá trị cho thuộc tính khi khởi tạo 1 instance
    //Trong 1 class của typescript thì chỉ có 1 constructor
    //Tạo nhiều constructor => sử dụng overloading => giúp mình có thể khởi tạo vs nhiều hình thái khác nhau
    constructor(name: string, age: number, gender: string);
    constructor(name: string, age: number);
    constructor(name: string, age: number, gender?: string) {
        this.age = age
        this.gender = gender || "unknow"
        this.name = name
    }

    //Phương thức => sẽ định nghĩa ra những hành động , hành vi, khả năng mà đối tượng có thể làm
    work(): void {
        console.log("Working...");
    }
}

//Khởi tạo instance 
//Instance là đối tượng khởi tạo từ class => sử dụng từ khoá new
const person1 = new Users("huudong", 22, "Nam")
const person2 = new Users("huudong", 25)
console.log(person1.age);
console.log(person2['age']);

person1.work()



