const a = [3,4,5]
a.sort(); //mutable
const b = a.slice(0, 2); //mutable
const c = b.toReversed(); //inmutable
const d = a.with(0, 99); //inmutable
console.log({a, b, c, d})

