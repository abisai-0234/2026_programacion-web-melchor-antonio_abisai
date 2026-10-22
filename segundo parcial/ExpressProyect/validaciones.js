function validarCorreo(correo){

}

//aqui va funcion de boleta
function validarBoleta(boleta){

}

function validarContrasena(contrasena){
    if (typeof contrasena !== 'string') return false;
    return contrasena.length >= 8;
}

module.exports = {validarCorreo, validarBoleta, validarContrasena}; 