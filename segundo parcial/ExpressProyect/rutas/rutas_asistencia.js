const express = require('express');
const router = express.Router();
// Corrección: cambiar 'Controlador' por 'controlador' en minúscula
const asistenciaControlador = require('../controlador/asistencia_controlador');

router.get('/', asistenciaControlador.obtenerAsistencias);
router.post('/', asistenciaControlador.registrarAsistencia);

module.exports = router;