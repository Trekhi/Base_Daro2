const { Router } = require("express");

const {
    crearMultimedia, 
    obtenerMultimedias, 
    obtenerMultimediaId,
    eliminarMultimedia,
    actualizarMultimedia
} = require("../controller/funcion_multimedia");

const router = Router();
    
router.get('/',  obtenerMultimedias);
router.get('/obtener/:_id',  obtenerMultimediaId);
router.post('/crearMultimedia',crearMultimedia)
router.put ('/actualizar/:_id', actualizarMultimedia)
router.delete('/eliminar/:_id',eliminarMultimedia)


module.exports = router;