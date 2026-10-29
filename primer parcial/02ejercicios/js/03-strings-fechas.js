// 03-strings-fechas.js
// Métodos de string más usados + el objeto Date — conecta con la validación
// de fecha (DD/MM/AAAA) de la semana 4. Completa cada TODO.

const entrada = '  María López  ';

// TODO: trim — imprime `entrada` sin espacios sobrantes
const entradaLimpia = entrada.trim();
console.log(entradaLimpia);
// TODO: split — parte el resultado del trim en un arreglo `partes`, separado por espacio
const partes = entradaLimpia.split(' ');
console.log(partes);
// TODO: includes — imprime si 'correo@cecyt9.ipn.mx' contiene '@'
console.log('correo@cecyt9.ipn.mx'.includes('@'));
// TODO: replace y replaceAll — con '05/09/2026', reemplaza '/' por '-'
//       primero con replace (una sola vez) y luego con replaceAll (todas)
const fechaTexto = '05/09/2026';
console.log(fechaTexto.replace('/', '-'));
console.log(fechaTexto.replaceAll('/', '-'));
// TODO: template literals — usando `nombre = 'María'` y `cupo = 25`, imprime
//       "María se inscribió en un taller con cupo para 25 personas."
const nombre = 'María';
const cupo = 25;
console.log(`${nombre} se inscribió en un taller con cupo para ${cupo} personas.`);
// TODO: Date — completa esta función para construir un objeto Date a partir
// de un texto 'DD/MM/AAAA' (recuerda: los meses en Date empiezan en 0)
function fechaDesdeTexto(textoFecha) {
  const [dia, mes, año] = textoFecha.split('/');
  return new Date(año, mes - 1, dia);
}

// TODO: usa fechaDesdeTexto('05/09/2026'), imprime su toISOString() y su
// getDay(); luego calcula cuántos días de diferencia hay contra `new Date()`
const miFecha = fechaDesdeTexto('05/09/2026');
console.log(miFecha.toISOString());
console.log(miFecha.getDay());

const hoy = new Date();
const diferenciaMs = Math.abs(miFecha - hoy);
const diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
console.log(`Diferencia: ${diferenciaDias} días`);