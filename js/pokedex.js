const containerCards = document.querySelector('#cards-container');

document.addEventListener('DOMContentLoaded', () => {
    fetch('../pokedex/pokemons.json')
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
        card.className = 'pokemon-card';

        let img = document.createElement('img');
        img.src = '../img/asset-pokemon/'+getImagen(pokemon.id)+'.png';

        let name = document.createElement('h2');
        name.textContent = pokemon.nombre;

        let tipos = document.createElement('p');

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(tipos);

        containerCards.appendChild(card);
    })
}
function getImagen(id){
    if (id < 100){
        id = (id < 10) ? '00'+id: '0'+id;
    }
    return id;
}