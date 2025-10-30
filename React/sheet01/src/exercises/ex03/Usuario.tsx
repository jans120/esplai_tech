interface UsuarioProps {
  nombre: string;
  edad?: number; // El '?' hace que esta prop sea opcional
}

const Usuario = ({ nombre, edad }: UsuarioProps) => {
  return (
    <div>
      <p>
        <strong>Nombre:</strong> {nombre}{' '}
        {/* 2. Renderizado condicional para la edad */}
        {edad !== undefined ? `(Edad: ${edad})` : '(Edad no disponible)'}
      </p>
    </div>
  );
};

export default Usuario;