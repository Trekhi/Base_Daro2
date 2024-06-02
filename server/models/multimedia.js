const { Schema, model } = require('mongoose');

const MultimediaSchema = Schema({

    descripcion: {
        type: String,
        required: [true, 'La descripción es necesaria'],
    },
    url: {
        type: String,
        required: [true, 'La dirección es necesaria'],
    }
});

//VISUALIZAR INFORMACIÓN AL MOMENTO DE INSERTAR INFO EN EL MODELO
MultimediaSchema.methods.toJSON = function() {
    const { __v, ...data  } = this.toObject();
    return data;
}

module.exports = model( 'Multimedia', MultimediaSchema,'imagenes' );

