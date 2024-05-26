const { Router } = require("express");

const {
    obtenerMultimediaPelicula,
    obtenerTodosMultimedia,
    obtenerGrupoMultimedia,
    crearMultimediaPelicula,
    actualizarMultimediaPelicula,
    borrarMultimediaHeroe
  } = require("../controller/funcion_multimedia_pelicula");
  
  const router = Router();
  
  router.get('/',obtenerMultimediaPelicula)
  router.get('/Datos',obtenerTodosMultimedia)
  router.post('/Grupo_especifico', obtenerGrupoMultimedia)
  router.post('/Crear-Grupo-especifico/', crearMultimediaPelicula)
  router.put('/actualizar/:id' , actualizarMultimediaPelicula)
  router.delete('/eliminar/:id', borrarMultimediaHeroe)
  
  module.exports = router;