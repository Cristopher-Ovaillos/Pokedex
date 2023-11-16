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

//buscar por nombre
router.get('/:nombrePokemon', (req, res) => {
    const nombreABuscar = req.params.nombrePokemon;

    if (nombreABuscar === "" || nombreABuscar === ":") {
        return res.status(400).json({ error: 'Nombre de Pokémon no proporcionado en la consulta.' });
    }

    const resultados = pokemons.filter(pokemon => nombreABuscar.toLowerCase().includes(pokemon.nombre.toLowerCase()));

    res.json(resultados);
});

router.post('/', (req, res) => {
    const { id, nombre, tipos, estadisticas, habilidades, especie, descripcion, habitat } = req.body;

    // Validar que los campos requeridos estén presentes y sean del tipo esperado
    if (
        id !== undefined && typeof id === 'number' &&
        nombre && typeof nombre === 'string' &&
        tipos && Array.isArray(tipos) && tipos.length > 0 &&
        estadisticas && Array.isArray(estadisticas) && estadisticas.length > 0 &&
        habilidades && Array.isArray(habilidades) &&
        especie && typeof especie === 'string' &&
        descripcion && typeof descripcion === 'string' &&
        habitat && typeof habitat === 'string'
    ) {
        // Creo pokemon
        const nuevoPokemon = { ...req.body };

        // Agregar nuevo pokemon al arreglo de pokemons
        pokemons.push(nuevoPokemon);
        res.json(pokemons);
        console.log("Dato ingresado exitosamente");
    } else {
        // Alguno de los campos requeridos está ausente o tiene un tipo incorrecto
        res.status(400).json({ error: 'Datos de entrada no validos' });
    }
});
router.put('/:nombrePokemon', (req, res) => {
    const nombreABuscar = req.params.nombrePokemon;
     const { id, nombre, tipos, estadisticas, habilidades, especie, descripcion, habitat } = req.body;
    console.log("Nombre a buscar:"+ nombreABuscar);
    console.log("solicitud:"+ req.body);

    const pokemonElegido= pokemons.find(pokemon => nombreABuscar.toLowerCase() === pokemon.nombre.toLowerCase());

    if (!pokemonElegido) {
        return res.status(404).json({ error: "Pokemon no encontrado."});
    }

    // Actualizar la descripción directamente
    pokemonElegido.descripcion = descripcion;

    // Devolver solo los datos actualizados del Pokémon
    res.json(pokemonElegido);
});
module.exports = router;