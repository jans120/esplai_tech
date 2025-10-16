function formatearA(n, a) {
if (!n || !a) throw TypeError();
return a + ", " + n;
}

const formatearB = function(n, a) {
if (!n || !a) throw TypeError();
return a + ", " + n;
};

const formatearC = (n, a) => {
if (!n || !a) throw TypeError();
return a + ", " + n;
};

// Pruebas rápidas:
console.log(formatearA('Ana', 'López')); // "López, Ana"
console.log(formatearB('Luis', 'Pérez')); // "Pérez, Luis"
console.log(formatearC('Érika', 'Suárez')); // "Suárez, Érika"

// Prueba de error esperado:
try { formatearA('', 'X'); } catch(e){ console.log(e instanceof TypeError); } // true