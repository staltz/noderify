
const opts = {}
// Node 14
const undef = opts?.timeout // Optional chaining

// Node 15
const ten = opts.timeout ??= 10 // Nullish coalescing assignment 

// Node 18
const arr = [1, 2, 3, 4, 5]
const four = arr.findLast(el => el % 2 === 0)
// => 4
