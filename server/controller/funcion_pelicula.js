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


const eliminarPelicula = async(req,res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res
        .status(400)
        .json({
          error: "ID de la pelicula no proporcionado en el cuerpo de la solicitud",
        });
    }

    const peliculaEliminado = await Pelicula.findByIdAndDelete(_id);

    if (!peliculaEliminado) {
      return res.status(404).json({ error: "Pelicula no encontrada" });
    }

    res.json({ message: "Pelicula eliminada exitosamente" });
  } catch (error) {
    console.error("Error en eliminar pelicula:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


const actualizarPelicula = async (req, res = response) => {
  const {_id } = req.params;

  if (!_id) {
    return res
      .status(400)
      .json({
        error: "ID del héroe no proporcionado en el cuerpo de la solicitud",
      });
  }

  const data  = req.body;

  console.log(data)

  try {
    const pelicula = await Pelicula.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.json({ Ok: true, msg: 'Pelicula Actualizado', resp: pelicula });
  } catch (error) {
    console.log("ERROR_MODIFICAR",error);
    res.json({ Ok: false, resp: error });
  }
};

  
module.exports = { 
  crearPelicula, 
  obtenerPeliculas, 
  obtenerPeliculaPorId,
  eliminarPelicula,
  actualizarPelicula
};