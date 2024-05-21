const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  id_sql: {
    type: Number,
    required: [true, 'El id_sql es obligatorio'],
  },
  nombre: {
    type: String,
    required: [true, 'Es necesario el nombre'],
  },
  correo: {
    type: String,
    required: [true, 'Es necesario el correo'],
  },
  password: {
    type: String,
    required: [true, 'Es necesaria una contraseña'],
  },
  img: {
    type: String,
    default: null,
  },
  rol: {
    type: String,
    enum: ["ADMIN_ROLE", "USER_ROLE"],
    required: [true, 'Es necesario un rol'],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: null,
  },
  brandProviderId: {
    type: Number,
    default: null,
  },
});

UsuarioSchema.methods.toJSON = function() {
    const { __v, ...data  } = this.toObject();
    return data;
}

const Usuario = mongoose.model("Usuario_pamii", UsuarioSchema,"usuario_pamii");

module.exports = Usuario;

/////BIEN