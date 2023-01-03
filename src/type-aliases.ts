// Allow you to create a new name for an existing type. 
// They can help to reduce code application
// They're similar to interfaces, but can also describe primitive types.

type StringOrNum = string | number

let id: StringOrNum = 24

// let id: StringOrNum = false // Error: Type 'boolean' is not assignable to type 'StringOrNum'.