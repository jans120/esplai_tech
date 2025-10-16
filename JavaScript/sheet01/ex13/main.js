var variableGlobal = "Soy global"; // Declarada globalmente con var

function mostrarScope() {
  let variableLocal = "Soy local"; // Declarada localmente con let
  
  console.log("Dentro de la función:");
  console.log("variableGlobal:", variableGlobal); // Accede a la variable global
  console.log("variableLocal:", variableLocal);   // Accede a la variable local
}

mostrarScope();

console.log("Fuera de la función:");
console.log("variableGlobal:", variableGlobal); // Se puede acceder, porque es global

// La siguiente línea daría error porque variableLocal no está definida fuera de la función
// console.log("variableLocal:", variableLocal); 

// Para evitar el error, la comentamos y mostramos con try-catch para ilustrar:

try {
  console.log("variableLocal:", variableLocal);
} catch (error) {
  console.log("variableLocal no está accesible fuera de la función (Error):", error.message);
}
