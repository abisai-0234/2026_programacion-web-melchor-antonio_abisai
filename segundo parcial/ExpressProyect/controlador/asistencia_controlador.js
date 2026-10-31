const AsistenciaModelo = require('../modelo/asistencia');

async function registrarAsistencia(req, res) {
    try {
        const datos = req.body;
        const resultado = await AsistenciaModelo.registrarAsistencia(datos);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function listarAsistenciaUsuario(req, res) {
    try {
        const { id } = req.params;
        res.json([]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function listarAsistenciaTaller(req, res) {
    try {
        const { id } = req.params;
        res.json([]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registrarAsistencia,
    listarAsistenciaUsuario,
    listarAsistenciaTaller
};