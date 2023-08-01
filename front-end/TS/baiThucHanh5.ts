// Định nghĩa Type Function cho hàm tính chu vi hình tròn
type CirclePerimeterFn = (radius: number) => number;

// Định nghĩa Type Function cho hàm tính diện tích hình tròn
type CircleAreaFn = (radius: number) => number;

// Hàm tính chu vi hình tròn
const calculatePerimeter: CirclePerimeterFn = (radius) => {
  return 2 * Math.PI * radius;
};

// Hàm tính diện tích hình tròn
const calculateArea: CircleAreaFn = (radius) => {
  return Math.PI * radius * radius;
};

const radius: number = 5;

console.log("Radius:" ,radius);
console.log("Perimeter:" ,calculatePerimeter(radius));
console.log("Area:",calculateArea(radius));