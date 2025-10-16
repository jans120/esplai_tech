// ex12 – Hoisting con var

console.log(x); // Resultado: undefined
var x = 5;
console.log(x); // Resultado: 5

/* 
Explicación:

En JavaScript, las declaraciones con 'var' se **"hoistean"** (se elevan) al inicio del ámbito, 
pero **no** su asignación.

Esto significa que durante la fase de compilación, el intérprete reserva espacio para la variable 'x' 
pero la deja sin inicializar (valor 'undefined') hasta que se ejecuta la línea donde se asigna el valor 5.

Por eso, el primer console.log(x) muestra 'undefined' porque la variable existe pero aún no tiene valor asignado.

El segundo console.log(x) muestra 5 porque para ese momento la asignación ya se ha ejecutado.
*/
