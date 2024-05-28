const { Heroe } = require("../models");


// Crear un nuevo héroe
const crearHeroe = async (req, res) => {
  try {
    const { nombre, bio, img, aparicion, casa } = req.body;

    if (!nombre || !bio || !img || !aparicion || !casa) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const nuevoHeroe = new Heroe({ nombre, bio, img, aparicion, casa });
    await nuevoHeroe.save();

    res.json({ data: nuevoHeroe });
  } catch (error) {
    console.error("Error en crearHeroe:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


const obtenerHeroes = async (req, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  //const query = { estado: true };

  try {
    const [total, heroes] = await Promise.all([
      Heroe.countDocuments(),
      Heroe.find({})
        .skip(Number(desde))
        .sort({nombre:1})
        //.limit(Number(limite)),
    ]);

    res.json({ Ok: true, total: total, resp: heroes });
  } catch (error) {
    res.json({ Ok: false, resp: error });
  }
};




const unHeroe = async (req, res) => {
  const {_id } = req.params;
  try {
    const heroe = await Heroe.findById(_id);
    res.json({ Ok: true, resp: heroe });
  } catch (error) {
    console.error("Error en obtener Heroe por id:", error);
    res.status(500).json({ Ok: false, resp: error.message });
  }
};



// Eliminar un héroe por su ID
const eliminarHeroe = async (req, res) => {
  try {
    const { _id } = req.params;

    if (!_id) {
      return res
        .status(400)
        .json({
          error: "ID del héroe no proporcionado en la url",
        });
    }

    const heroeEliminado = await Heroe.findByIdAndDelete(_id);

    if (!heroeEliminado) {
      return res.status(404).json({ error: "Héroe no encontrado" });
    }

    res.json({ message: "Héroe eliminado exitosamente" });
  } catch (error) {
    console.error("Error en eliminarHeroe:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};



// Modificar un héroe por su ID

const modificarHeroe = async (req, res) => {
  try {
    const {_id } = req.params; // Obtener el ID de los parámetros de la URL
    const { nombre, bio, img, aparicion, casa } = req.body;

    // Verificar si el ID fue proporcionado
    if (!_id) {
      return res.status(400).json({ error: "ID del héroe no proporcionado en la URL" });
    }

    // Actualizar el héroe
    const heroeModificado = await Heroe.findByIdAndUpdate(_id, { nombre, bio, img, aparicion, casa }, { new: true });

    // Verificar si el héroe fue encontrado y modificado
    if (!heroeModificado) {
      return res.status(404).json({ error: "Héroe no encontrado" });
    }

    // Responder con el héroe modificado
    res.json({ data: heroeModificado });
  } catch (error) {
    console.error("Error en modificarHeroe:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};



module.exports = {
  crearHeroe,
  obtenerHeroes,
  unHeroe,
  eliminarHeroe,
  modificarHeroe,
  
};

