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
        const { id } = req.params;
        const taller = await TalleresModelo.obtenerPorId(id);
        if (!taller) {
            return res.status(404).json({ error: "Taller no encontrado" });
        }
        res.json(taller);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crearTaller(req, res) {
    try {
        const fecha = new Date().toISOString().slice(0, 10);
        const taller = { ...req.body, fecha };
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
        res.json([]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function listarTalleresDeUsuario(req, res) {
    try {
        res.json([]);
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