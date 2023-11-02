document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("buscador-pokemon");
    const botonAgregar = document.getElementById("agregar-pokemon");
    
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
                    // Mostrar la información del Pokémon encontrado en la consola
                    console.log(`Nombre: ${encontrado.nombre}, id: ${encontrado.id}`);
                } else {
                    // Mostrar un mensaje en la consola
                    console.log("Pokémon no encontrado");
                }
            });
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON: " + error);
        });
});