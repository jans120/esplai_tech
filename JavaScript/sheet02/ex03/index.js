function procesar(lista, transformador){
    return lista.map(transformador)
}

function aMayusculas(valor){
    return valor.toUpperCase()
}

function etiquetaIndice(valor, indice){
    return `#${i}:${v}`;
}

const base = ['a','b'];
const t1 = procesar(base, v=>v.toUpperCase());
console.log(t1.join(',')); // A,B
console.log(base.join(',')); // a,b (inmutable)

console.log("manue")
// ex03. Funciones de orden superior y Callbacks

function aMayusculas(v){
    return v.toUpperCase();
}


function etiquetaIndice(v, i){
    return `#${i}:${v}`; 
}

function procesar(lista, transformador){
    const nuevaLista = []; 

    for(let i = 0; i < lista.length; i++){
        const nuevoValor = transformador(lista[i], i);
        nuevaLista.push(nuevoValor);
    }
    return nuevaLista;
}

function main(){
    const base = ['a', 'b'];  
    const t1 = procesar(base, v => v.toUpperCase());
    console.log(t1.join(',')); 
    console.log(base.join(',')); 
}

main();