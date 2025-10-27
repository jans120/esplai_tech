const persona = {nombre: 'carlos'};

function saludar(ciudad){
    console.log(`Soy ${this.nombre} de ${ciudad}`)
}

// llama y usa persona como su this
saludar.call(persona, 'madrid')

// igual, llama y  lo usa como su this pero en un array
saludar.apply(persona, ['madrid'])

//no lo llama, lo crea y devuelve su this de forma permanente, creando otra funcion con otro nombre
const saludarLuis = saludar.bind({nombre: 'luis'})

saludarLuis('sevilla')

//creo una funcion que automaticamente me haga el aply sin guardarlo y asi poder pasarle parametros
function invocarCon(contexto, funcion, ...argumentos){
    funcion.apply(contexto, argumentos);
}

invocarCon({nombre:'Ada'}, saludar, 'Zaragoza')

