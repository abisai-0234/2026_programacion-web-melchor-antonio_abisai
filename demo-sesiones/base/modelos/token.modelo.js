function crearModeloToken(pool){
 // la funcion para revocar el token 
 async function revocar(jti, usuario, exp){
    await pool.querry(
        'INSERT INTO tokens_revocados(jti, usuario, expira) VALUES(?,?, FROM_UNIXTIME(?))', [jti, usuario, exp]
    );

 }

// consulta para saber cuales estan revocados 

async function estaRevocado(jti){
    const[filas] = await pool.query('SELECT 1 FROM tokens_revocados WHERE jti = ?', [String(jti || '')]);
    return filas.length > 0;


// necesitamos consultar el estado del diagnostico de los tokens 

    async function listar(){
        const[filas] = await pool.query(
            'SELECT jti, usuario, expira, revocado_en FROM tokens_revocados ORDER BY revocado_en DESC, jti');
        return filas;
    }

    }
}