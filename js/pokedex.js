const containerCards = document.querySelector('#cards-container');
const colores = {
    fire: "#ff7402",
    grass: "#9bcc50",
    steel: "#9eb7b8",
    water: "#4592c4",
    psychic: "#f366b9",
    ground: "#ab9842",
    ice: "#51fff0",
    flying: "#3dc7ef",
    ghost: "#753a79",
    normal: "#a4acaf",
    poison: "#882869",
    rock: "#a38c21",
    fighting: "#d56723",
    dark: "#707070",
    bug: "#729f3f",
    dragon: "linear-gradient(to bottom, #8859f5, #e0e0e0)",
    electric: "#f8e325",
    fairy: "#fdb9e9",
    shadow: "#7b62a3"
};

function agregarColoresCards() {
    var styles = document.createElement('style');
    styles.textContent = '';
    
    for (var key in colores) {
        var css = `div.${key}.pokemon-card, div.${key}.pokemon-card .card-container-name { background: ${colores[key]}; }\n`;
        styles.textContent += css;
    }

    document.head.appendChild(styles);
}


document.addEventListener('DOMContentLoaded', () => {
    agregarColoresCards(); // inserta en css todos los posibles colores
    fetch('../Pokedex/pokemons.json') //obtiene la info de los pokemon
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
        card.classList.add('pokemon-card', getColorPorTipo(pokemon.tipos));
        

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

