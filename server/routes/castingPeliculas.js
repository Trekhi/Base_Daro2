const { Router } = require("express");

const {
  obtenerCasting, 
  crearCasting, 
  obtenerCastingPelicula,
  actualizarCasting,
  borrarCasting,
  obtenerCastingPeliculaID
} = require("../controller/funciones_casting");

const router = Router();

router.get('/',  obtenerCasting);
router.get('/obtenerNombres',obtenerCastingPelicula)
router.get('/obtenerID/:_id', obtenerCastingPeliculaID )
router.post('/crearCasting' , crearCasting);
router.put('/actualizar/:_id',actualizarCasting)
router.delete('/eliminar/:_id',borrarCasting)


module.exports = router;