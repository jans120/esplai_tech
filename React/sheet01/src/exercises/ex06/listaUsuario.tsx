import Usuario from "../ex03/Usuario";

// 1. Definimos la forma de un único objeto 'usuario'
interface Usuario {
    id: number;
    nombre: string;
    activo: boolean;
}

// 2. Definimos las props del componente: espera un array de usuarios
interface ListasProps {
    usuarios: Usuario[];
}

const Listas = ({ usuarios }: ListasProps) => {
    const usuariosActivos = usuarios.filter(usuario => usuario.activo);
    return (
        <>
            {usuariosActivos.length > 0 ? (
                <ul>
                    {/* 3. Usamos .map() para transformar cada usuario en un <li> */}
                    {usuariosActivos.map(usuario => (
                        // 4. Asignamos una 'key' única y estable a cada elemento de la lista
                        <li key={usuario.id}>
                            {usuario.nombre}
                        </li>
                    ))}
                </ul>) : (
                <p>No hay usuarios activos</p>
            )}
        </>
    );
};

export default Listas;