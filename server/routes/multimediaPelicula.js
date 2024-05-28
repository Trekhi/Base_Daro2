const { Router } = require("express");

const {
    obtenerMultimediaPelicula,
    obtenerTodosMultimedia,
    obtenerGrupoMultimedia,
    crearMultimediaPelicula,
    actualizarMultimediaPelicula,
    borrarMultimediaPelicula
  } = require("../controller/funcion_multimedia_pelicula");
  
  const router = Router();
  
  router.get('/',obtenerMultimediaPelicula)
  router.get('/Datos',obtenerTodosMultimedia)
  router.get('/Grupo_especifico/:_id', obtenerGrupoMultimedia)
  router.post('/CrearGrupo', crearMultimediaPelicula)
  router.put('/actualizar/:_id' , actualizarMultimediaPelicula)
  router.delete('/eliminar/:_id', borrarMultimediaPelicula)
  
  module.exports = router;  