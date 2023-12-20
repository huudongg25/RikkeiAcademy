// Định nghĩa kiểu dữ liệu và tạo dữ liệu mẫu
//quy tắc thiết db: là k đc dư thừa dữ liệu
const users = [
    {
        id: 1,
        fullName: "Fullname",
        email: "email",
        password: '112222',
        role: 1, //vai trò 1 admin,2 user
        status: 1, //để check trạng thái => 1 là bth,2 là bị cấm
        carts: [
            {
                id:1,
                productName:'tên sản phẩm',
                price:1111111,
                isDelete:1, //soft delete => 1 là bth,2 là bị xoá mềm
                img:'' , //['']
                desc:"mô tả",
                size:'L',
                color:'yellow' ,
                quantity:20
            },
        ],
    }
]

if (!JSON.parse(localStorage.getItem('users'))) {
    localStorage.setItem('users',JSON.stringify(users))
}
