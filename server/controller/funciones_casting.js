const { CastingPelicula } = require('../models');

const obtenerCasting = async (req, res) => {
  try {
    const castingPelicula = await CastingPelicula.find();
    res.json({ Ok: true, resp: castingPelicula });
  } catch (error) {
    console.error("Error en obtenerCasting:", error);
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

const crearCasting = async (req, res) => {
  try {
    const { pelicula, heroe } = req.body;
    const nuevoCasting = new CastingPelicula({ pelicula, heroe });
    await nuevoCasting.save();
    res.json({ Ok: true, resp: nuevoCasting });
  } catch (error) {
    console.error("Error en crearCasting:", error);
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

const obtenerCastingPelicula = async (req, res) => {
  try {
    const castingPelicula = await CastingPelicula.find()
      .populate('heroes_id', 'nombre') // Populate para el campo 'pelicula'
      .populate('peliculas_id', 'titulo');   // Populate para el campo 'heroe'
    res.json({ Ok: true, resp: castingPelicula });
  } catch (error) {
    console.error("Error en obtenerCastingPelicula:", error);
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

module.exports = { obtenerCasting, crearCasting, obtenerCastingPelicula };
