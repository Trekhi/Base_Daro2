const { Router } = require("express");

const {
  obtenerCasting,
  crearCasting,
  obtenerCastingPelicula,
} = require("../controller/funciones_casting");

const router = Router();

router.get('',  obtenerCasting);
router.post('/crearCasting' , crearCasting);
router.get('/infoCasting', obtenerCastingPelicula);


module.exports = router;