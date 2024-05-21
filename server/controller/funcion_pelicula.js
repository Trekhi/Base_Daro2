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
    const { id } = req.params;
    try {
      const pelicula = await Pelicula.findById(id);
      res.json({ Ok: true, resp: pelicula });
    } catch (error) {
      console.error("Error en obtenerPeliculaPorId:", error);
      res.status(500).json({ Ok: false, resp: error.message });
    }
  };
  
module.exports = { crearPelicula, obtenerPeliculas, obtenerPeliculaPorId };