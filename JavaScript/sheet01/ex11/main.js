const usuario = { nombre: "Lucía", edad: 27, activo: true };

for (const propiedad in usuario) {
  console.log(`Propiedad: ${propiedad} => Valor: ${usuario[propiedad]}`);
}