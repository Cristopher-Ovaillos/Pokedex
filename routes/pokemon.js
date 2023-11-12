const { Router } = require('express');
const router = Router();
const pokemons = require('../archivos/Pokedex/pokemons.json');

router.get('/', (req, res) => {
    res.json(pokemons);  // Enviar el objeto pokemon como respuesta
});
router.post('/', (req, res) => {
    const { id, nombre, tipos, estadisticas, habilidades, especie, descripcion, habitat } = req.body;
    if (id && nombre && tipos && estadisticas && habilidades && especie && descripcion && habitat) {
        const nuevoPokemon = { ...req.body };
        pokemons.push(nuevoPokemon);
        res.json(pokemons);
        console.log("exito");
    } else {
        res.send('received');
    }
}
);
module.exports = router;