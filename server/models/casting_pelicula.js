const mongoose = require('mongoose');

const CastingPeliculaSchema = new mongoose.Schema({
    heroes_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Heroe',
        required: true
    },
    personaje: {  // Cambiado de personajes a personaje
        type: String,
        required: [true, 'El nombre del personaje es necesario'],
    },
    peliculas_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pelicula',
        required: true
    }
});

CastingPeliculaSchema.methods.toJSON = function() {
    const { __v, ...data  } = this.toObject();
    return data;
}
// Define el modelo y especifica el nombre exacto de la colección
const CastingPelicula = mongoose.model('Casting_Pelicula', CastingPeliculaSchema, 'casting_pelicula');


module.exports = CastingPelicula;

/////////////////////////////////BIEN