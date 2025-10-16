'use strict';

nombre = "Lucía"; //  Error: variable no declarada
console.log(nombre);



//Al activar 'use strict';, JavaScript no permite declarar variables implícitamente (es decir, sin let, const o var).

//En modo no estricto, escribir nombre = "Lucía" crearía una variable global de forma implícita.

//En modo estricto, eso lanza un error, porque obliga al programador a declarar explícitamente las variables, lo cual ayuda a evitar errores comunes y malas prácticas.

'use strict';

let nombre = "Lucía";
console.log(nombre); // ✅ Funciona correctamente
