export function sumar(a, b) {
  return a + b;
}

export const PI = Math.PI;

export function areaCirculo(r) {
  return r * r * PI;
}

export function media(...nums) {
  // Filtramos para quedarnos solo con los valores que son de tipo 'number'.
  const numerosValidos = nums.filter(
    (num) => typeof num === "number" && !isNaN(num)
  );

  // Si no hay números válidos, devolvemos 0 para evitar división por cero.
  if (numerosValidos.length === 0) {
    return 0;
  }

  const suma = numerosValidos.reduce((acc, current) => acc + current, 0);
  return suma / numerosValidos.length;
}
