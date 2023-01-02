// we can define the types of the arguments, and the return type.
// below : string could be omitted because TS would infer the return type.
function circle(diam: number): string {
    return 'Circumf = ' + Math.PI * diam
}

// ES6 Arrow function
const circle2 = (diam: number): string => 'Circumf = ' + Math.PI * diam

// if we want to declare a function, but not define it, use a function signature
let sayHi: (name: string) => void

sayHi = (name: string) => console.log('Hi ' + name)

sayHi('Danny')