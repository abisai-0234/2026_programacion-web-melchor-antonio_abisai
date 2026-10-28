const express = require('express');
const app = express();
app.use(express.json());
const pool = require('./db-local');
 
// Controladores
const usuarioControlador = require('./controlador/usuario_controlador');
const tallerControlador = require('./controlador/talleres_controlador');
const asistenciaControlador = require('./controlador/asistencia_controlador');

const PORT = 4000;

// Rutas de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'API funcionando' });
});

app.get('/saludo', (req, res) => {
    res.json({ mensaje: 'Hola esto es una prueba en GET' });
});

app.post('/eco', (req, res) => {
    const { texto } = req.body;
    if (!texto) {
        return res.status(400).json({ error: 'El texto es obligatorio' });
    }
    res.status(201).json({ eco: texto });
});

// Rutas de Usuarios (Corregido 'listarUsuarios' por 'obtenerUsuarios')
app.get('/usuarios', usuarioControlador.obtenerUsuarios);
app.get('/usuarios/:id', usuarioControlador.obtenerUsuario);
app.post('/usuarios', usuarioControlador.crearUsuario);
// app.put('/usuarios/:id', usuarioControlador.actualizarUsuario); // Comentado si aún no lo creas en el controlador
app.delete('/usuarios/:id', usuarioControlador.eliminarUsuario);
 
// Rutas de Talleres (Verifica que estén exportadas en taller_controlador)
app.get('/talleres', tallerControlador.listarTalleres);
app.get('/talleres/:id', tallerControlador.obtenerTaller);
app.post('/talleres', tallerControlador.crearTaller);
app.put('/talleres/:id', tallerControlador.actualizarTaller);
app.delete('/talleres/:id', tallerControlador.eliminarTaller);
 
app.post('/talleres/:id/inscripciones', tallerControlador.inscribirseEnTaller);
app.get('/talleres/:id/inscritos', tallerControlador.listarInscritosTaller);
 
// Rutas de Asistencias
app.post('/asistencias', asistenciaControlador.registrarAsistencia);
app.get('/talleres/:id/asistencias', asistenciaControlador.listarAsistenciaTaller);

// Iniciar servidor al final
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});