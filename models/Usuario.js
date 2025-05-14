const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, default: "usuario" },
}, { timestamps: true });

module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);
