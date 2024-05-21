const { Router } = require('express')

const {unHeroe,
    eliminarHeroe,
    modificarHeroe,
    crearHeroe } = require('../controller/funcion_Heroe')

const { obtenerCasting, crearCasting, obtenerCastingPelicula } = require('../controller/funciones_c')

const { crearPelicula, obtenerPeliculas, obtenerPeliculaPorId } = require('../controller/funcion_pelicula') 

const router = Router();

router.get('/pruebaM', obtenerCastingPelicula);
router.post('/cast',crearCasting);
router.post('/peli', crearPelicula);

module.exports = router;