// Định nghĩa kiểu dữ liệu và tạo dữ liệu mẫu
const orders = [
    {   
        id:1,
        idUsers:1,
        totalPrice:122213,
        address:'22a',
        phoneNumber:'213213131',
        status:1, //1 là đã nhận đơn,2 là đang giao,3 là thành công
        date:'ngày thanh toán',
        payment:1, //1 là thanh toán khi nhận hàng,2 là thanh toán onl
    },
    
]

if (!JSON.parse(localStorage.getItem('orders'))) {
    localStorage.setItem('orders',JSON.stringify(users))
}