document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("buscador-pokemon");
    const botonAgregar = document.getElementById("agregar-pokemon");
    
    const nombres=[];

    let pos=1;
    fetch("../Pokedex/pokemons.json")
        .then(response => response.json())
        .then(datos => {
            const nombres = datos;
            console.log("NOMBRES DEL JSON", nombres);
            
            botonAgregar.addEventListener("click", (event) => {
                event.preventDefault(); // Evitar la acción predeterminada del formulario

                const nombrePokemon = input.value.toLowerCase();
               
                const encontrado = nombres.find(pokemon => pokemon.nombre === nombrePokemon);
                if (encontrado) {
                    nombres.push(nombrePokemon);
                    // Mostrar la información del Pokémon encontrado en la consola
                    console.log(`Nombre: ${encontrado.nombre}, id: ${encontrado.id}`);

                    
                    const celda= document.querySelector(`#img-${pos}`);
                    
                    let img = document.createElement('img');
                    img.src = "../img/asset-pokemon/"+getImagen(encontrado.id)+".png";
                    celda.appendChild(img);
                    pos++;


                } else {
                    // Mostrar un mensaje en la consola
                    console.log("Pokémon no encontrado");
                }

                input.value = "";
            });
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON: " + error);
        });
});

function getImagen(id){
    if (id < 100){
        id = (id < 10) ? '00'+id: '0'+id;
    }
    return id;
}