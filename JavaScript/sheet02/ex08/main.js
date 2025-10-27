(function () {
  // 1. Definimos una constante interna.
  // Esta constante 'SECRET' solo existe dentro de esta función. Es inaccesible desde fuera.
  const SECRET = 42;

  /**
   * 2. Definimos una función interna que tiene acceso a 'SECRET'.
   * Esta función es un "closure" porque "recuerda" el ámbito en el que fue creada.
   * @returns {number} El valor de la constante interna SECRET.
   */
  function getSecret() {
    return SECRET;
  }

  // 3. Exponemos la función 'getSecret' al ámbito global.
  // 'globalThis' es una forma estándar de referirse al objeto global,
  // ya sea 'window' en un navegador o 'global' en Node.js.
  globalThis.getSecret = getSecret;

  console.log(
    "IIFE ejecutada: La función 'getSecret' ha sido expuesta globalmente."
  );
})(); // Los paréntesis finales '()' invocan la función inmediatamente.

console.log(typeof SECRET === "undefined"); // true
console.log(globalThis.getSecret()); // 42
