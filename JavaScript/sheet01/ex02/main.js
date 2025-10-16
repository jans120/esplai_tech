var a = "hola"
var b = 2
var c = true
var d
var e = null
var f = Symbol("simbolo")
var g = 1234567890123456789012345678901234567890n

// Mostrar el tipo de cada variable con typeof
console.log("texto:", typeof a); // string
console.log("numero:", typeof b);// number
console.log("esVerdadero:", typeof c);// boolean
console.log("noDefinido:", typeof d);// undefined
console.log("vacio:", typeof e);// object (esto es una excepción en JS)
console.log("simbolo:", typeof f);// symbol
console.log("numeroGrande:", typeof g);// bigint