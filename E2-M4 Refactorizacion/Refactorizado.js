const usuario = {
  nombre: 'Ana',
  edad: 24,
  ciudad: 'Barcelona'
};

const crearMensajePresentacion = ({ nombre, edad, ciudad }) => {
  const mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}.`;
  return mensaje;
};

const mensajeDeBienvenida = crearMensajePresentacion(usuario);
console.log(mensajeDeBienvenida);