const containerCards = document.querySelector('#cards-container');

document.addEventListener('DOMContentLoaded', () => {
    fetch('../Pokedex/pokemons.json')
        .then(data => {
            return data.json()
        })
        .then(datos => {
            mostrarCards(datos)
        })

});

function mostrarCards(datos) {

    datos.forEach((pokemon) => {

        let card = document.createElement('div');
        card.classList.add('pokemon-card', getColorPorTipo(pokemon.tipos))

        let containerImgPokemon = document.createElement('div');
        containerImgPokemon.className = "container-img-pk";

        let img = document.createElement('img');
        img.src = '../img/asset-pokemon/'+getImagen(pokemon.id)+'.png';

        let nameDiv = document.createElement('div');
        nameDiv.className = "card-container-name"
        let name = document.createElement('h2');
        name.textContent = pokemon.nombre;
        nameDiv.appendChild(name);

        let tipos = document.createElement('div');
        tipos.className = 'card-tipos'

        let tipo1 = document.createElement('span');
        tipo1.textContent = pokemon.tipos[0];

        
        tipos.appendChild(tipo1);
        if (pokemon.tipos[1]){
            let tipo2 = document.createElement('span');
            tipo2.textContent = pokemon.tipos[1];
            tipos.appendChild(tipo2);
        }

        containerImgPokemon.appendChild(img)

        card.appendChild(containerImgPokemon);
        card.appendChild(nameDiv);

        card.appendChild(tipos);
    

        containerCards.appendChild(card);
    })
}

function getColorPorTipo(tipos){
    //falta arreglar cuando son de 2 tipos
    return tipos[0];
}
function getImagen(id){
    if (id < 100){
        id = (id < 10) ? '00'+id: '0'+id;
    }
    return id;
}