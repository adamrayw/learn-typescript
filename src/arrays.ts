// we can define what kind of data an array can contain
let cars: string[] = ['Audi', 'BMW', 'Honda']

// Use a union type for arrays with multiple types
let options: (string | number)[];
options = ['this is string', 20]

options[0] = false // Error: Type 'boolean' is not assignable to type 'string | number'.
