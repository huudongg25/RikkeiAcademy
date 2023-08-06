

interface Address {
    street?: string;
    city?: string;
    country?: string;
}

// Hàm lấy thông tin country từ Address
function getAddressCountry(address: Address): string {
    return address?.country ?? "Unknown";
}

// Kiểm tra ứng dụng
const address1: Address = { street: "123 Main St", city: "New York" };
const address2: Address = {};

console.log(getAddressCountry(address1)); // Output: Unknown
console.log(getAddressCountry(address2)); // Output: Unknown