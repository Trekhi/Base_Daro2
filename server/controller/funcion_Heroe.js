const { Heroe } = require("../models");

const unHeroe = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res
        .status(400)
        .json({
          error: "ID del héroe no proporcionado en el cuerpo de la solicitud",
        });
    }

    const heroe = await Heroe.findOne({ _id });

    if (!heroe) {
      return res.status(404).json({ error: "Héroe no encontrado" });
    }

    // Envía la respuesta con los datos del héroe encontrado
    res.json({data: heroe });
  } catch (error) {
    console.error("Error en unHeroe:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


// Eliminar un héroe por su ID
const eliminarHeroe = async (req, res) => {
    try {
      const { _id } = req.body;
  
      if (!_id) {
        return res
          .status(400)
          .json({
            error: "ID del héroe no proporcionado en el cuerpo de la solicitud",
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
      const { _id, nombre, bio, img, aparicion, casa } = req.body;
  
      if (!_id) {
        return res
          .status(400)
          .json({
            error: "ID del héroe no proporcionado en el cuerpo de la solicitud",
          });
      }
  
      const heroeModificado = await Heroe.findByIdAndUpdate(_id, { nombre, bio, img, aparicion, casa }, { new: true });
  
      if (!heroeModificado) {
        return res.status(404).json({ error: "Héroe no encontrado" });
      }
  
      res.json({ data: heroeModificado });
    } catch (error) {
      console.error("Error en modificarHeroe:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };


  
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



  
  module.exports = {
    unHeroe,
    eliminarHeroe,
    modificarHeroe,
    crearHeroe
  };

