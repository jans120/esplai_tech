// Definimos los tipos para las props del componente para usar TypeScript.
// Esto asegura que 'nombre' siempre será un string.
type SaludoProps = {
    nombre: string;
};

/**
 * Componente funcional Saludo.
 * @param {SaludoProps} props - Las props del componente.
 * @param {string} props.nombre - El nombre a mostrar en el saludo.
 * @returns Un elemento h1 con un saludo personalizado.
 */
const Saludo = ({ nombre }: SaludoProps) => {
    return <h1>Hola, {nombre}!</h1>;
};

// Exportamos el componente para poder importarlo desde otros archivos, como App.tsx.
export default Saludo