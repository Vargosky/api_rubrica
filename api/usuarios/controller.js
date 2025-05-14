const bcrypt = require("bcryptjs");
const Usuario = require("../../models/Usuario");
const connectToDatabase = require("../utils/connectToDatabase");

const crearUsuario = async (req, res) => {
    try {
        await connectToDatabase();

        const { nombre, email, password, rol } = req.body;

        const existe = await Usuario.findOne({ email });
        if (existe) {
            return res.status(400).json({ message: 'Email ya registrado' });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordEncriptado = await bcrypt.hash(password, salt);

        const nuevoUsuario = new Usuario({ nombre, email, password: passwordEncriptado, rol });
        const usuarioGuardado = await nuevoUsuario.save();

        res.status(201).json(usuarioGuardado);

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error al crear usuario", error: error.message });
    }
};

module.exports = { crearUsuario };
