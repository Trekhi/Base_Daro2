const { Router } = require("express");

const {
  crearPelicula,
  obtenerPeliculas,
  obtenerPeliculaPorId,
} = require("../controller/funcion_pelicula");

const router = Router();

router.get('/',obtenerPeliculas);
router.get('/id',obtenerPeliculaPorId);
router.post('/crearPelicula', crearPelicula);

module.exports = router;