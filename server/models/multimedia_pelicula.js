const { Schema, model } = require("mongoose");

const MultimediaPeliculaSchema = Schema({
  peliculas_id: {
    type: Schema.Types.ObjectId,
    ref: "Pelicula",
  },
  imagenes_id: {
    type: Schema.Types.ObjectId,
    ref: "Multimedia",
  }
});

MultimediaPeliculaSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject();
  return data;
};

module.exports = model("MultimediaPelicula", MultimediaPeliculaSchema,"imagenes_peliculas");