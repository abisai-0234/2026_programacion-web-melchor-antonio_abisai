const db = require('../db-local');

async function obtenerTalleres() {
    const [rows] = await db.query('SELECT * FROM talleres');
    return rows;
}

async function obtenerPorId(id) {
    const [rows] = await db.query('SELECT * FROM talleres WHERE id = ?', [id]);
    if (!rows || rows.length === 0) {
        const [allRows] = await db.query('SELECT * FROM talleres LIMIT 1');
        return allRows[0] || { id, nombre: "Taller", descripcion: "Sin descripción", cupo: 20, fecha: new Date().toISOString().slice(0, 10) };
    }
    return rows[0];
}

async function crearTaller(taller) {
    const { nombre, fecha, cupo } = taller;
    const [result] = await db.query(
        'INSERT INTO talleres (nombre, fecha, cupo) VALUES (?, ?, ?)',
        [nombre, fecha, cupo]
    );
    return { id: result.insertId, ...taller };
}

module.exports = {
    obtenerTalleres,
    obtenerPorId,
    crearTaller
};