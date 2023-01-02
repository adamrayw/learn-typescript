// we can refer to specific strings & numbers in type positions
let direction: 'UP' | 'DOWN'

// direction = 'LEFT'; // Error: Type '"LEFT"' is not assignable to type '"UP" | "DOWN"'.

direction = 'UP'; // Not Error