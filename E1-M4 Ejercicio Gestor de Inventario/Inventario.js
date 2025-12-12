
class Libro {

    constructor(titulo, autor, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.estado = estado; 
    }
    mostrarInfo() {
        console.log(`El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}.`);
    }
}
const inventario = [];

console.log("--- Inicio de Carga Interactiva de Libros ---");

let agregarOtro = true;
do {
    const titulo = prompt("Introduce el título del libro:");
    const autor = prompt("Introduce el autor del libro:");
    const estado = prompt("Introduce el estado (Ej: Disponible, Prestado):");
    if (titulo && autor && estado) {
        const nuevoLibro = new Libro(titulo, autor, estado);
        inventario.push(nuevoLibro);
        console.log(`Libro "${titulo}" agregado al inventario.`);
    } else {
        console.log("Se omitió la entrada porque faltan datos.");
    }
    agregarOtro = confirm("¿Deseas agregar otro libro?");

} while (agregarOtro);

console.log("\n--- Inventario Completo de la Biblioteca ---");

if (inventario.length === 0) {
    console.log("El inventario está vacío.");
} else {
    for (const libro of inventario) {
        libro.mostrarInfo();
    }
}

console.log("--- Fin del Inventario ---");