// 01-ARREGLOS 

const talleres = [
  { nombre: 'Introducción a Python', instructor: 'Ing. María López', cupo: 25, inscritos: 25 },
  { nombre: 'Fundamentos de Redes', instructor: 'Ing. Carlos Ramírez', cupo: 30, inscritos: 18 },
  { nombre: 'Diseño de Bases de Datos', instructor: 'Ing. Ana Torres', cupo: 20, inscritos: 20 },
  { nombre: 'Desarrollo Web con JS', instructor: 'Ing. María López', cupo: 25, inscritos: 10 },
];

function pintarTabla(){
    const tabla = document.getElementById('tabla-talleres');
    if (!tabla) return; // Si no hay tabla en esta vista, no truena el script
    
    const tbody = tabla.querySelector('tbody');
    if (!tbody) return;

    tbody.innerHTML = talleres.map((a) => `
        <tr>
            <td>${a.nombre}</td>
            <td>${a.instructor}</td>
            <td>${a.cupo}</td>
            <td>${a.inscritos}</td>
        </tr>
    `).join('');
}

pintarTabla();

const formArreglos = document.getElementById('form-arreglos');
const resultadoArreglos = document.getElementById('resultado-arreglo');
const selectOperacionArreglo = document.getElementById('operacion-arreglo');

if (formArreglos) {
    formArreglos.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const operacion = selectOperacionArreglo.value;
        let resultado;

        switch(operacion){
            case 'forEach':
                resultado = talleres.map((a) => `- ${a.nombre} (${a.inscritos}/${a.cupo})`).join('\n');
                break;
            case 'map':
                resultado = talleres.map((a) => a.nombre).join(', ');
                break;
            case 'filter':
                resultado = talleres.filter((a) => a.inscritos >= a.cupo).map((a) => a.nombre).join(', ');
                break;
            case 'find':
                const tallerEncontrado = talleres.find((a) => a.instructor === 'Ing. María López');
                resultado = tallerEncontrado ? tallerEncontrado.nombre : 'No encontrado';
                break;
        }
        if (resultadoArreglos) resultadoArreglos.textContent = resultado;
    });
}