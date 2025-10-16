// Declaración de variables
var numero = 42;          // var puede ser redeclarada y reasignada
let texto = "Hola";       // let puede ser reasignada pero no redeclarada en el mismo ámbito
const esActivo = true;    // const no puede ser reasignada ni redeclarada

// Imprimir valores iniciales
console.log("var numero:", numero);
console.log("let texto:", texto);
console.log("const esActivo:", esActivo);

// Intentar reasignar
numero = 100;             // ✅ Se puede reasignar
texto = "Mundo";          // ✅ Se puede reasignar
// esActivo = false;      // ❌ Error: no se puede reasignar una constante

// Imprimir valores después de intento de reasignación
console.log("var numero (reasignado):", numero);
console.log("let texto (reasignado):", texto);
// console.log("const esActivo (reasignado):", esActivo); // No se puede cambiar

/* 
Explicación:
- `var` permite redeclaración y reasignación. Su ámbito es la función o global.
- `let` permite solo reasignación (no redeclaración en el mismo bloque). Su ámbito es de bloque.
- `const` no permite ni redeclaración ni reasignación. También tiene ámbito de bloque.
*/
