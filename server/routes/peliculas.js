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
router.get('/:_id',obtenerPeliculaPorId);
router.post('/crearP', crearPelicula);
router.delete('/eliminarP/:_id',eliminarPelicula);
router.put('/actualizarP/:_id',actualizarPelicula);

module.exports = router;