const { Router } = require("express");

const {
  unHeroe,
  eliminarHeroe,
  modificarHeroe,
  crearHeroe,
} = require("../controller/funcion_Heroe");

const router = Router();

router.get('/', unHeroe);
router.post('/crearHeroe', crearHeroe);
router.put('/moficarHeroe', modificarHeroe);
router.delete('/eliminarHeroe', eliminarHeroe);

module.exports = router;