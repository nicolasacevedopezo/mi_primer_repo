const nombre = prompt("Ingresa tu nombre:");
const apellido = prompt("Ingresa tu apellido:");


if (!nombre || !apellido) {
    console.log("Se requieren tanto el nombre como el apellido para generar el nombre de usuario");
} else {
  
    const inicial = nombre.slice(0, 1).toLowerCase(); 
    const fragmentoApellido = apellido.slice(0, 3).toLowerCase(); 
    const numeroAleatorio = Math.floor(Math.random() * 90) + 10;
    const numeroComoString = String(numeroAleatorio);
    const nombreUsuarioFinal = inicial.concat(fragmentoApellido, numeroComoString); 

    console.log(`Tu nuevo nombre de usuario es: ${nombreUsuarioFinal}`);
    console.log("---");
    console.log(`Detalles del proceso:`);
    console.log(`- Inicial (minúscula): ${inicial}`);
    console.log(`- Apellido (3 primeras, minúscula): ${fragmentoApellido}`);
    console.log(`- Número Aleatorio (10-99): ${numeroAleatorio}`);
}