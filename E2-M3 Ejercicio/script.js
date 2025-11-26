let listaDeTareas = [
    "trabajar",
    "estudiar",
    "cocinar",
    "socializar",
    "llamar a la familia",
    "hablar con amigos"
];

let agregarMas = true;

do {
    let nuevaTarea = prompt("Ingresa una nueva tarea (o presiona Cancelar para finalizar):");

    if (nuevaTarea === null) {
        agregarMas = false;
    } else if (nuevaTarea.trim() !== "") {
        listaDeTareas.push(nuevaTarea.trim());

        agregarMas = confirm("¿Deseas agregar otra tarea?");
    } else {
        alert("Por favor, ingresa una tarea válida.");
        agregarMas = confirm("¿Deseas intentar agregar una tarea?");
    }

} while (agregarMas);
console.log("--- Lista de Tareas Pendientes ---");

if (listaDeTareas.length === 0) {
    console.log("No hay tareas pendientes.");
} else {

    listaDeTareas.forEach((tarea, indice) => {
        console.log(`${indice + 1}. ${tarea}`);
    });
}