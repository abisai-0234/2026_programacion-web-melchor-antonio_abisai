const pool = require('/../db-local');

const COLUMNAS_PUBLICAS = 'id, nombre,correo, boleta, rol';

// consultar todos los usuarios 

async function listar() {
    const [filas] = await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM usuarios ORDER by id`);

}

async function obtenerPorid() {
    const [filas] = await pool.query(`SELECT ${COLUMNAS_PUBLICAS} FROM usuarios WHERE id = ?`, [id]);
    return filas [0];   
}

// registrar un nuevo usuario 

async function crear({nombre, correro, contrasenaHash, boleta, rol}) {
    const[info] = await pool.query(`
        insert into usuarios (nombre, correo, contrasena_hash, boleta, rol) VALUES (?, ?, ?, ?, ?)`
        [nombre, correo, contrasenaHash, boleta, rol || 'alumno'] );
        return obtenerPorid(info.insertId);
}

// actualizar un alumno 

async function actualizar(id, {nombre, correo, rol}){
    

}