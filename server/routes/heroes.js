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
router.post('/',unHeroe)
router.post('/crearHeroe', crearHeroe);
router.put('/moficarHeroe', modificarHeroe);
router.delete('/eliminarHeroe', eliminarHeroe);

module.exports = router;