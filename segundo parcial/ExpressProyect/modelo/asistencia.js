const db = require('../db-local');

async function registrarAsistencia(datos) {
    const { tallerId, usuarioId, fecha } = datos;
    const [result] = await db.query(
        'INSERT INTO asistencia (taller_id, usuario_id, fecha) VALUES (?, ?, ?)',
        [tallerId || datos.taller_id, usuarioId || datos.usuario_id, fecha]
    );
    return { id: result.insertId, ...datos };
}

module.exports = {
    registrarAsistencia
};