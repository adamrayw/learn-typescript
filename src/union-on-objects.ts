// Union type in TypeScript is a way of declaring that a variable can have several different types.

// define some types it is Square and Rectangle
type Square = {kind: "square", size: number};
type Rectangle = { kind: "rectangle", width: number, height: number };

// assign two types that we make before to Shape
type Shape = Square | Rectangle;

// create function the name is area that accept s as a parameter with Shape type
function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
    }
}

// create square variable with Shape type but we assign size equal 10
const square: Square = { kind: "square", size: 10 }
// create rectangle variable with Rectangle type but we assign width equal 10 and height equal 20
const rectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };

console.log(area(square))
console.log(area(rectangle))