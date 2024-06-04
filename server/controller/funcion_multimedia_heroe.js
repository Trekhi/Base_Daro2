const { MultimediaHeroe, Heroe, Multimedia } = require("../models");

const obtenerMultimediaHeroe = async (req, res = response) => {
  const { limite = 20, desde = 0 } = req.query;
  // Eliminamos el filtro de estado
  const query = {};

  try {
    const limiteNum = Number(limite);
    const desdeNum = Number(desde);

    if (isNaN(limiteNum) || isNaN(desdeNum)) {
      return res.status(400).json({
        Ok: false,
        resp: "Los parámetros 'limite' y 'desde' deben ser números válidos.",
      });
    }

    const [total, imagenes_heroes] = await Promise.all([
      MultimediaHeroe.countDocuments(query),
      MultimediaHeroe.find(query)
        .populate({
          path: "heroes_id",
          select: "nombre",
        })
        .populate({
          path: "imagenes_id",
          select: "url",
        })
        .populate({
          path: "imagenes_id",
          select: "descripcion",
        })
        .skip(desdeNum)
        .limit(limiteNum),
    ]);

    res.json({ Ok: true, total: total, resp: imagenes_heroes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

const obtenerTodosMultimediaH = async (req, res = response) => {
  try {
    const total = await MultimediaHeroe.countDocuments();
    const documentos = await MultimediaHeroe.find();

    res.json({ Ok: true, total: total, documentos: documentos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

const obtenerGrupoMultimediaH = async (req, res = response) => {
  const {_id } = req.params;

  try {
    const grupomultimediaH = await MultimediaHeroe.findById(_id)
      .populate("heroes_id", "nombre bio img aparacion casa")
      .populate("imagenes_id", "descripcion url");

    res.json({ Ok: true, resp: grupomultimediaH });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

const crearMultimediaHeroe = async (req, res = response) => {
  const { heroes_id, imagenes_id } = req.body;

  try {
    const heroeExistente = await Heroe.findById(heroes_id);
    const imagenExistente = await Multimedia.findById(imagenes_id);

    if (!heroeExistente) {
      return res.status(404).json({
        Ok: false,
        msg: `El heroe con ID ${heroes_id} no existe`,
      });
    }

    if (!imagenExistente) {
      return res.status(404).json({
        Ok: false,
        msg: `La imagen con ID ${imagenes_id} no existe`,
      });
    }

    const data = {
      heroes_id,
      imagenes_id,
    };

    const multimediaHeroe = new MultimediaHeroe(data);

    // Guardar en la base de datos
    await multimediaHeroe.save();

    res.status(201).json({ Ok: true, resp: multimediaHeroe });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

const actualizarMultimediaHeroe = async (req, res = response) => {
  const {_id } = req.params;
  const { heroes_id, imagenes_id } = req.body;

  try {
    const multimediaHeroe = await MultimediaHeroe.findByIdAndUpdate(_id, { heroes_id, imagenes_id }, {
      new: true,
    });

    if (!multimediaHeroe) {
      return res.status(404).json({ Ok: false, msg: 'No se encontró ningún documento con el ID proporcionado' });
    }

    res.json({ Ok: true, resp: multimediaHeroe });
  } catch (error) {
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

const borrarMultimediaHeroe = async (req, res = response) => {
  const {_id } = req.params;

  try {

      const multimediaHeroeBorrado = await MultimediaHeroe.findByIdAndDelete(_id);
      res.json({ Ok: true, resp: multimediaHeroeBorrado });

  } catch (error) {
      res.json({ Ok: false, resp: error });
  }
};

const obtenerHeroe = async ( req, res = response)  => {
  const {heroes_id} = req.params;

  try{
    const multimediaHeroe = await MultimediaHeroe.find({ heroes_id: heroes_id })
      .populate("heroes_id", "nombre")
      .populate("imagenes_id","descripcion url")

      res.json({ Ok: true, total: multimediaHeroe.length, resp: multimediaHeroe });
      }catch (error) {
      console.error(error);
      res.status(500).json({ Ok: false, resp: error.message });
      }
};


module.exports = {
  obtenerMultimediaHeroe,
  obtenerTodosMultimediaH,
  obtenerGrupoMultimediaH,
  crearMultimediaHeroe,
  actualizarMultimediaHeroe,
  borrarMultimediaHeroe,
  obtenerHeroe
};
