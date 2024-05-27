const { Router } = require("express");

const {
    obtenerMultimediaHeroe,
    obtenerTodosMultimediaH,
    obtenerGrupoMultimediaH
} = require("../controller/funcion_multimedia_heroe");

const router = Router();

router.get('/',  obtenerMultimediaHeroe);
router.get('/todos',  obtenerTodosMultimediaH);
router.get('/obtener/:_id',  obtenerGrupoMultimediaH);


module.exports = router;