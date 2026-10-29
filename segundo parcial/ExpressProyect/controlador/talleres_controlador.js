const TalleresModelo = require('../modelo/talleres');

async function listarTalleres(req, res) {
    try {
        const talleres = await TalleresModelo.obtenerTalleres();
        res.json(talleres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function obtenerTaller(req, res) {
    try {
        res.json({ mensaje: "Obtener taller por ID" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crearTaller(req, res) {
    try {
        const taller = req.body;
        const nuevoTaller = await TalleresModelo.crearTaller(taller);
        res.status(201).json(nuevoTaller);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarTaller(req, res) {
    try {
        res.json({ mensaje: "Actualizar taller" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarTaller(req, res) {
    try {
        res.json({ mensaje: "Eliminar taller" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function inscribirseEnTaller(req, res) {
    try {
        res.json({ mensaje: "Inscribirse en taller" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function listarInscritosTaller(req, res) {
    try {
        res.json({ mensaje: "Listar inscritos" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function listarTalleresDeUsuario(req, res) {
    try {
        res.json({ mensaje: "Talleres de usuario" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listarTalleres,
    obtenerTaller,
    crearTaller,
    actualizarTaller,
    eliminarTaller,
    inscribirseEnTaller,
    listarInscritosTaller,
    listarTalleresDeUsuario
};