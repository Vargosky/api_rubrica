const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
require('dotenv').config();

const usuariosRoutes = require('./usuarios/routes');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta raíz de test
app.get('/', (req, res) => {
    res.json({ message: 'API Rubricas funcionando correctamente en Vercel Serverless.' });
});

// Ruta /test específica
app.get('/test', (req, res) => {
    res.json({ message: 'Ruta TEST funcionando.' });
});

// Montar tus rutas
app.use('/usuarios', usuariosRoutes);

// Exportar la app usando serverless-http
module.exports = serverless(app);
