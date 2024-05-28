const { Schema, model } = require("mongoose");

const MultimediaHeroeSchema = Schema({
  heroes_id: {
    type: Schema.Types.ObjectId,
    ref: "Heroe",
  },
  imagenes_id: {
    type: Schema.Types.ObjectId,
    ref: "Multimedia",
  }
});

MultimediaHeroeSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject();
  return data;
};

module.exports = model("MultimediaHeroe", MultimediaHeroeSchema,"imagenes_heroes");
