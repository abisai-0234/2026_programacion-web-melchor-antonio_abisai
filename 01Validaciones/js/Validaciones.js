

const patrones = {
    nombre: /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{2,60}$/,
    boleta: /^\d{10}$/,
    fecha: /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
};

const mensajes = {
    nombre: "Solo letras y espacios entre 2 y 60 caracteres.",
    boleta: "Debe tener exactamente 10 digitos.",
    fecha: "Formato esperado: DD/MM/AAAA (ej 28/09/2011)"
};

function validarCampo(campo, valor) {
    return patrones[campo].test(valor.trim());
}

if (typeof document !== 'undefined') {
    const formulario = document.getElementById('form-registro');
    
    // Corrección: paréntesis corregido en (evento) =>
    formulario.addEventListener('submit', (evento) => {
        // Corrección: preventDefault bien escrito
        evento.preventDefault();

        let formularioValido = true;

        for (const campo of Object.keys(patrones)) {
            const input = document.getElementById(campo);
            
            const spanError = document.getElementById(`error-${campo}`);
            
            const esValido = validarCampo(campo, input.value);

            input.classList.toggle('invalido', !esValido);
            spanError.textContent = esValido ? '' : mensajes[campo];
            
            if (!esValido) formularioValido = false;
        }

        const mensajeExito = document.getElementById('mensaje-exito');
        mensajeExito.textContent = formularioValido ? 'Registro Exitoso!' : '';
        
    })
}
