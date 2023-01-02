// A tuple is a special type of array with fixed size & known 
// data types at each index. they're stricter

let infoPribadi: [string, number];

infoPribadi = ['Adam', 20] // OKAY

// infoPribadi = ['Adam', '20'] // Error: Type 'string' is not assignable to type 'number'.