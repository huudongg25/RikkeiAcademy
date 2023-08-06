

// Hình học cơ bản
interface Shape {
    kind: "rectangle" | "circle";
}

interface Rectangle extends Shape {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle extends Shape {
    kind: "circle";
    radius: number;
}

// Type guards
function isRectangle(shape: Shape): shape is Rectangle {
    return shape.kind === "rectangle";
}

function isCircle(shape: Shape): shape is Circle {
    return shape.kind === "circle";
}

// Hàm tính diện tích
function calculateArea(shape: Shape): number {
    if (isRectangle(shape)) {
        const rectangle = shape as Rectangle;
        return rectangle.width * rectangle.height;
    } else if (isCircle(shape)) {
        const circle = shape as Circle;
        return Math.PI * circle.radius ** 2;
    }

    throw new Error("Invalid shape.");
}

const rectangle: Rectangle = { kind: "rectangle", width: 5, height: 10 };
const circle: Circle = { kind: "circle", radius: 7 };

console.log("Rectangle area:", calculateArea(rectangle)); // Output: 50
console.log("Circle area:", calculateArea(circle)); // Output: 153.93804002589985
