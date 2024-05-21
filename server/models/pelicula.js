const mongoose = require('mongoose');

const PeliculaSchema = new mongoose.Schema({
    
    titulo: {
        type: String,
        required: [true, 'El titulo es necesario'],
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es necesaria'],
    },
    fecha_lanzamiento: {
        type: Date,
        required: [true, 'La fecha de lanzamiento es necesaria'],
    },
    img: {
        type: String,
        required: [true, 'La imagen es necesaria'],
    }
});

PeliculaSchema.methods.toJSON = function() {
    const { __v, ...data  } = this.toObject();
    return data;
}

const Pelicula = mongoose.model('Pelicula', PeliculaSchema, "peliculas");

module.exports = Pelicula;


/////////BIEN