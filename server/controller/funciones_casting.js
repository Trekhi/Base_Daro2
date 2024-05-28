const { CastingPelicula, Pelicula, Heroe } = require('../models');

const obtenerCasting = async (req, res) => {
  try {
    const castingPelicula = await CastingPelicula.find();
    res.json({ Ok: true, resp: castingPelicula });
  } catch (error) {
    console.error("Error en obtenerCasting:", error);
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

const crearCasting = async (req, res = response) => {
  const { heroes_id, peliculas_id, personaje } = req.body;

  try {
    const heroeExistente = await Heroe.findById(heroes_id);
    const peliculaExistente = await Pelicula.findById(peliculas_id);

    if (!heroeExistente) {
      return res.status(404).json({
        Ok: false,
        msg: `El heroe con ID ${heroes_id} no existe`,
      });
    }

    if (!peliculaExistente) {
      return res.status(404).json({
        Ok: false,
        msg: `La pelicula con ID ${peliculas_id} no existe`,
      });
    }

    const data = {
      heroes_id,
      peliculas_id,
      personaje
    };

    const casting = new CastingPelicula(data);

    // Guardar en la base de datos
    await casting.save();

    res.status(201).json({ Ok: true, resp: casting });
  } catch (error) {
    console.error(error); 
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


const actualizarCasting = async (req, res = response) => {
  const {_id } = req.params;  // id se pasa por url
  const { heroes_id, peliculas_id, personaje } = req.body;  // valor que vaya a cambiar, pueden ser todos o solo 1 por el cuerpo de la solicitud

  try {
    const casting = await CastingPelicula.findByIdAndUpdate(_id, { heroes_id, peliculas_id, personaje }, {
      new: true,
    });

    if (!casting) {
      return res.status(404).json({ Ok: false, msg: 'No se encontró ningún documento con el ID proporcionado' });
    }

    res.json({ Ok: true, resp: casting });
  } catch (error) {
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

const borrarCasting = async (req, res = response) => {
  const {_id } = req.params;

  try {

      const castingeliminado = await CastingPelicula.findByIdAndDelete(_id);
      res.json({ Ok: true, resp:  castingeliminado });

  } catch (error) {
      res.json({ Ok: false, resp: error });
  }
};



module.exports = { 
  obtenerCasting, 
  crearCasting, 
  obtenerCastingPelicula,
  actualizarCasting,
  borrarCasting

};
