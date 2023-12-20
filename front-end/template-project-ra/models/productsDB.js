// Định nghĩa kiểu dữ liệu và tạo dữ liệu mẫu
const products = [
    {
        id:1,
        productName:'tên sản phẩm',
        price:1111111,
        stock:1111, //tồn kho
        isDelete:1, //soft delete => 1 là bth,2 là bị xoá mềm
        img:'' , //['']
        desc:"mô tả",
        size:['L','M','S'],
        color:['yellow','green']
    }
]

if (!JSON.parse(localStorage.getItem('products'))) {
    localStorage.setItem('products',JSON.stringify(users))
}