const { Router } = require('express');
const router = Router();
const pokemons = require('../archivos/Pokedex/pokemons.json');

router.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12; 
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let results = {};

    if (startIndex < pokemons.length) {
        results.results = pokemons.slice(startIndex, endIndex);
    } else {
        results.results = [];
    }

    res.json(results);
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