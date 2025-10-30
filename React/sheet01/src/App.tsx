// import Saludo from "./exercises/ex01/saludo";
// import Composicion from "./exercises/ex02/Composicion";
// import Usuario from "./exercises/ex03/Usuario";
// import PanelLogin from './exercises/ex04/PanelLogin';
import Listas from "./exercises/ex06/listaUsuario";

// const usuariosEx05 = [
//   { id: 1, nombre: 'María' },
//   { id: 2, nombre: 'Juan' },
//   { id: 3, nombre: 'Laura' },
// ];

const usuariosEx06 = [
  { id: 1, nombre: 'Ana', activo: true },
  { id: 2, nombre: 'Carlos', activo: false },
  { id: 3, nombre: 'Sofía', activo: true }
];

export default function App() {
  return (
    <main>
      <h1>Sheet01</h1>

      {/* <h2>ex01</h2><Saludo nombre="Mundo" /> */}

      {/* <h2>ex02</h2><Composicion /> */}

      {/* <h2>ex03</h2><Usuario nombre="Juan" edad={12} /> */}

      {/* <h2>ex04</h2><PanelLogin logueado={true} /><PanelLogin logueado={false} /> */}

      {/* <h2>ex05</h2>
      <ul>
        {usuariosEx05.map(usuario => (
          <li key={usuario.id}>
            {usuario.nombre}
          </li>
        ))}
      </ul> */}

      <h2>ex06</h2><Listas usuarios={usuariosEx06} />
    </main>
  );
}
