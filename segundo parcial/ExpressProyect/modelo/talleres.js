const db = require('../db-local');

async function obtenerTalleres() {
    const [rows] = await db.query('SELECT * FROM talleres');
    return rows;
}

async function crearTaller(taller) {
    const { nombre, instructor, fecha, cupo } = taller;
    const [result] = await db.query(
        'INSERT INTO talleres (nombre, instructor, fecha, cupo) VALUES (?, ?, ?, ?)',
        [nombre, instructor, fecha, cupo]
    );
    return { id: result.insertId, ...taller };
}

module.exports = {
    obtenerTalleres,
    crearTaller
};