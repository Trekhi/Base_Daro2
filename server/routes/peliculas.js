const { Router } = require("express");

const {
  crearPelicula,
  obtenerPeliculas,
  obtenerPeliculaPorId,
  eliminarPelicula,
  actualizarPelicula
} = require("../controller/funcion_pelicula");

const router = Router();


router.get('/',obtenerPeliculas);
router.post('/id',obtenerPeliculaPorId);
router.post('/crearPelicula', crearPelicula);
router.delete('id',eliminarPelicula);
router.put('/id',actualizarPelicula);

module.exports = router;