/* Arreglo de objetos */
const tareas = [
    { id: 100, nombre: "Correr", completado: false },
    { id: 102, nombre: "Almorzar", completado: false },
    { id: 200, nombre: "Estudiar", completado: false },
    { id: 204, nombre: "Leer", completado: false },
];

/* Capturando Etiquetas del DOM */
const btn = document.querySelector("#agregarTarea");
const lista = document.querySelector("#tareas");

/* Función para actualizar tareas completadas */
const actualizar = (id) => {
    let tareaIndex = tareas.findIndex(
        (tarea) => tarea.id === id);

    tareas[tareaIndex].completado = !tareas[tareaIndex].completado;
    let tareasRealizadas = tareas.filter(
        (tarea) => tarea.completado == true
    );
    document.querySelector("#completados").innerHTML = `Tareas Completadas: ${tareasRealizadas.length}`;
};

/* Función para borrar tareas */
const eliminar = (id) => {
    let tareaIndex = tareas.findIndex(
        (tarea) => tarea.id === id
    );
    tareas.splice(tareaIndex, 1);
    let tareasRealizadas = tareas.filter(
        (tarea) => tarea.completado == true);
    document.querySelector("#completados").innerHTML = `Tareas Completadas: ${tareasRealizadas.length}`;
    tarea_actual();
};

/* Modificando el DOM con las tareas ingresadas en el input */
const tarea_actual = () => {
    let html = ``;
    tareas.forEach((tarea) => {
        html += `<li>${tarea.nombre} | <button onclick='eliminar(${tarea.id
            })'>Eliminar</button> | <input type='checkbox' onclick='actualizar(${tarea.id
            })' ${tarea.completado === true ? "checked" : null}></li>`;
    });
    document.querySelector(
        "#cuenta-tareas"
    ).innerHTML = `Tareas: ${tareas.length}`;
    lista.innerHTML = html;
};

/* Agregando el input al arreglo de objetos */
btn.addEventListener("click", () => {
    let value = document.querySelector("input").value;
    let nueva_tarea = {
        id: Date.now(),
        nombre: value,
        notificado: false,
    };
    tareas.push(nueva_tarea);
    tarea_actual();
});

tarea_actual();
