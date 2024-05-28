const { Router } = require("express");

const {
  crearHeroe,
  obtenerHeroes,
  unHeroe,
  eliminarHeroe,
  modificarHeroe,
} = require("../controller/funcion_Heroe");

const router = Router();

router.get('/',obtenerHeroes)
router.get('/:_id',unHeroe)
router.post('/crearHeroe', crearHeroe);
router.put('/moficarHeroe/:_id', modificarHeroe);
router.delete('/eliminarHeroe/:_id', eliminarHeroe);

module.exports = router;