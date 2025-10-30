import Saludo from "../ex01/saludo";

const Composicion = () => {
    return (
        // 2. Agregamos un contenedor div con su clase CSS
        <div className="saludos">
            {/* 3. Reutilizamos el componente Saludo con diferentes props */}
            <Saludo nombre="Ana" />
            <Saludo nombre="Luis" />
            <Saludo nombre="Marta" />
        </div>
    );
};

export default Composicion