// objects in TS must have all the correct properties & value types

let person: {
    name: string;
    isProgrammer: boolean;
}

person = {
    name: 'Adam',
    isProgrammer: true
}

// person.name = 23 // Error: Type 'number' is not assignable to type 'string'.
// person.isProgrammer = 'false' // Error: Type 'string' is not assignable to type 'boolean'.