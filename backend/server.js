const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Configurar CORS
app.use(cors());

// Configurar middleware para analizar JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/registro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(error => console.error('Error al conectar a MongoDB:', error));

// Definir un esquema y un modelo para los usuarios
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Configurar ruta para registrar usuarios
app.post('/usuarios', async (req, res) => {
  const { nombre, email, contraseña } = req.body;

  try {
    const nuevoUsuario = new Usuario({ nombre, email, contraseña });
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});