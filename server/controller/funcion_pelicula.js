const { Pelicula } = require('../models');

const crearPelicula = async (req, res) => {
    try {
      const nuevaPelicula = await Pelicula.create(req.body);
      res.json({ Ok: true, resp: nuevaPelicula });
    } catch (error) {
      console.error("Error en crearPelicula:", error);
      res.status(500).json({ Ok: false, resp: error.message });
    }
  };

const obtenerPeliculas = async (req, res) => {
    try {
      const peliculas = await Pelicula.find();
      res.json({ Ok: true, resp: peliculas });
    } catch (error) {
      console.error("Error en obtenerPeliculas:", error);
      res.status(500).json({ Ok: false, resp: error.message });
    }
  };

const obtenerPeliculaPorId = async (req, res) => {
    const {_id } = req.params;
    try {
      const pelicula = await Pelicula.findById(_id);
      res.json({ Ok: true, resp: pelicula });
    } catch (error) {
      console.error("Error en obtenerPeliculaPorId:", error);
      res.status(500).json({ Ok: false, resp: error.message });
    }
  };


  const eliminarPelicula = async (req, res) => {
    try {
      const { _id } = req.params;
  
      if (!_id) {
        return res
          .status(400)
          .json({
            error: "ID de la pelicula no proporcionado en la url",
          });
      }
  
      const peliculaEliminada = await Pelicula.findByIdAndDelete(_id);
  
      if (!peliculaEliminada) {
        return res.status(404).json({ error: "pelicula no encontrado" });
      }
  
      res.json({ message: "Pelicula eliminada exitosamente" });
    } catch (error) {
      console.error("Error en eliminar Pelicula:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };
  


  const actualizarPelicula = async (req, res) => {
    try {
      const {_id } = req.params; // Obtener el ID de los parámetros de la URL
      const { titulo, descripcion, fecha_lanzamiento,img } = req.body;
  
      // Verificar si el ID fue proporcionado
      if (!_id) {
        return res.status(400).json({ error: "ID de la pelicula no proporcionada en la URL" });
      }
  
      // Actualizar el héroe
      const peliculaModificado = await Pelicula.findByIdAndUpdate(_id, { titulo, descripcion, fecha_lanzamiento,img }, { new: true });
  
      // Verificar si el héroe fue encontrado y modificado
      if (!peliculaModificado) {
        return res.status(404).json({ error: "Héroe no encontrado" });
      }
  
      // Responder con el héroe modificado
      res.json({ data: peliculaModificado });
    } catch (error) {
      console.error("Error en modificarHeroe:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };

  
module.exports = { 
  crearPelicula, 
  obtenerPeliculas, 
  obtenerPeliculaPorId,
  eliminarPelicula,
  actualizarPelicula
};