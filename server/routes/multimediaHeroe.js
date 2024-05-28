const { Router } = require("express");

const {
    obtenerMultimediaHeroe,
    obtenerTodosMultimediaH,
    obtenerGrupoMultimediaH,
    crearMultimediaHeroe,
    actualizarMultimediaHeroe,
    borrarMultimediaHeroe
} = require("../controller/funcion_multimedia_heroe");

const router = Router();
    
router.get('/',  obtenerMultimediaHeroe);
router.get('/todos',  obtenerTodosMultimediaH);
router.get('/obtener/:_id',  obtenerGrupoMultimediaH);
router.post('/crearMultimediaHeroe',crearMultimediaHeroe)
router.put ('/actualizar/:_id', actualizarMultimediaHeroe)
router.delete('/eliminar/:_id',borrarMultimediaHeroe)




module.exports = router;