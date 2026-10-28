const db = require('../db-local'); 
async function obtenerAsistencias() {
    const [filas] = await db.query('SELECT * FROM asistencias');
    return filas;
}

async function registrarAsistencia(datos) {
    const [resultado] = await db.query('INSERT INTO asistencias SET ?', [datos]);
    return resultado;
}

module.exports = {
    obtenerAsistencias,
    registrarAsistencia
};