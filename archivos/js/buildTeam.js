document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("buscador-pokemon");
    const botonAgregar = document.getElementById("agregar-pokemon");
    const tablaImagenes = document.getElementById("tabla-imagenes");
    let arregloPokemon = [];
    let pos = 0;

    botonAgregar.addEventListener("click", (event) => {
        event.preventDefault();

        const nombrePokemon = input.value.toLowerCase();
        const nombreRepetido = arregloPokemon.some(pokemon => pokemon.toLowerCase() === nombrePokemon);
        console.log(arregloPokemon);

        if (pos !== 6 && !nombreRepetido) {
            // solicitud al servidor 
            fetch("http://localhost:3000/API/pokemon/" + nombrePokemon)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Pokémon no encontrado');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    console.log("Nombre: " + data[0].nombre + " id:" + data[0].id);
                    arregloPokemon.push(nombrePokemon);
                    // Agrego
                    const celda = document.createElement('td');
                    let img = document.createElement('img');
                    img.src = '../img/asset-pokemon/' + getImagen(data[0].id) + '.png';
                    celda.appendChild(img);
                    tablaImagenes.appendChild(celda);
                    pos++;
                })
                .catch(error => {
                    // error en la consola
                    console.error('Error al obtener información del Pokémon:', error);
                });
        }
        input.value = "";
    });
});

function getImagen(id) {
    if (id < 100) {
        id = (id < 10) ? '00' + id : '0' + id;
    }
    return id;
}
