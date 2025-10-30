// 1. Definimos la interfaz para las props del componente.
interface PanelLoginProps {
  logueado: boolean; // La prop 'logueado' es obligatoria y de tipo booleano.
}


const PanelLogin = ({ logueado }: PanelLoginProps) => {
  return (
    <div>
      {/* 2. Usamos un operador ternario para decidir qué renderizar. */}
      {logueado
        ? <p>Bienvenido al panel de usuario</p>
        : <p>Por favor, inicia sesión</p>
      }
    </div>
  );
};

export default PanelLogin;
