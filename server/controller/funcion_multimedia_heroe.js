const { MultimediaHeroe, Heroe, Multimedia } = require("../models");

const obtenerMultimediaHeroe = async (req, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
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
          path: "heroe_id",
          select: "nombre",
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
  const { _id } = req.params;

  try {
    const grupomultimediaH = await MultimediaHeroe.findById(_id)
      .populate("heroe_id", "nombre bio img aparacion casa")
      .populate("imagenes_id", "descripcion url");

    res.json({ Ok: true, resp: grupomultimediaH });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Ok: false, resp: error.message });
  }
};

module.exports = {
  obtenerMultimediaHeroe,
  obtenerTodosMultimediaH,
  obtenerGrupoMultimediaH
};
