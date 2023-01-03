// Interfaces are used to describe objects, interfaces can always be opened & extended, unlike Type Aliases. Notice that `name` is `readonly`

interface Person {
    name: string
    isProgrammer: boolean
}

interface Point {
    x: number
    y: number
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x)
    console.log("The coordinate's y value is " + pt.y)
}

printCoord({x: 100, y: 100})