const temporizador = {
    nombre: "",
    iniciar(ms){
        setTimeout(function(){
            console.log("Listo: "+ this.nombre);
        }.bind(this),ms);
    }
}