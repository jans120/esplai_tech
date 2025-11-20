let listaPokemons = []
let mostrarListaPokemons = []
let numeroPagina = 1
const pokemonsPorPagina = 20
const MAXPOKEMONS = 1328
const BUSQUEDA = "https://pokeapi.co/api/v2/pokemon/?limit=${MAXPOKEMONS}"




//Clase pokemon
class Pokemon {
    constructor(pokemon){
        this.id = pokemon.id;
        this.nombre = pokemon.nombre;
        this.types = (pokemon.types || []).map(x => x.type.name);
        this.sprites = (data.sprites && ((data.sprites.other && data.sprites.other["official-artwork"] && data.sprites.other["official-artwork"].front_default) || data.sprites.front_default)) || "";
    
    


        this.evolucion = null; //[name, id, [name,id](evolucion anterior) ]
    }

    cardPokemon(pokemon) {
    const card = document.createElement("article");
    card.className = "card-item";

    const divImg = document.createElement("div");
    divImg.className = "card-image";

    const img = document.createElement("img");
    img.src = pokemon.sprites;
    img.alt = pokemon.name;

    const idTag = document.createElement("p");
    idTag.className = "id-tag";
    // idTag.textContent = ID / ${pokemon.id.toString().padStart(2, "0")};
    divImg.append(img, idTag);

    const divInfo = document.createElement("div");
    divInfo.className = "card-info";

    const title = document.createElement("h1");
    title.textContent = pokemon.name;

    const divTypes = document.createElement("div");
    divTypes.className = "types";
    pokemon.types.forEach(type => {
        const span = document.createElement("span");
        span.className = "type";
        span.textContent = type.toUpperCase();
        divTypes.appendChild(span);
    });
} ;
}

//Fech para hacer la busqueda de los pokemons por la id
async function getListaPokemons(BUSQUEDA) {
    try{
        const respuesta = await fetch(BUSQUEDA)
        if (!respuesta.ok) throw new Error("error");
        return respuesta 
    }catch(error){
        console.error("Error:", error.message);
    }
}

//Fech obtener pokemon para realizar su busqueda por nombre
async function busquedaPokemon(nombre) {
    try{
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!respuesta.ok) throw new Error ("No se encontro ningun pokemon con ese nombre");
        const datos = await respuesta.json();

        //cambiar el console para coger las respuesta
        console.log(datos.id, datos.name);
        return [datos.id, datos.name]

    }catch(error){
        console.error("Error:", error.message);
    }
}