var mensaje = "Mensaje global";

function mostrarMensaje() {
    //tien que tener var, es decir redeclarada
  var mensaje = "Mensaje local"; // Variable que "somete" (shadow) a la global dentro de la función
  console.log("Dentro de la función:", mensaje); // Imprime "Mensaje local"
}

mostrarMensaje();

console.log("Fuera de la función:", mensaje); // Imprime "Mensaje global"
