/* --- FUNCIONES BASE (SIMULACIÓN DE API) --- */
const obtenerUsuario = (id, callback) => {
  const demora = Math.random() * 1000 + 500;
  setTimeout(() => {
    if (!id) {
      callback('Error: ID de usuario no proporcionado.', null);
      return;
    }
    console.log(`Buscando usuario con ID: ${id}...`);
    const usuario = { id: id, nombre: 'John Doe', email: 'john.doe@example.com' };
    callback(null, usuario);
  }, demora);
};

const obtenerPosts = (userId, callback) => {
  const demora = Math.random() * 1000 + 500;
  setTimeout(() => {
    if (!userId) {
      callback('Error: ID de usuario no proporcionado para buscar posts.', null);
      return;
    }
    console.log(`Buscando posts del usuario con ID: ${userId}...`);
    const posts = [
      { id: 101, titulo: 'Mi primer post', contenido: '...' },
      { id: 102, titulo: 'Mi segundo post', contenido: '...' }
    ];
    callback(null, posts);
  }, demora);
};

const obtenerComentarios = (postId, callback) => {
  const demora = Math.random() * 1000 + 500;
  setTimeout(() => {
    if (!postId) {
      callback('Error: ID de post no proporcionado para buscar comentarios.', null);
      return;
    }
    console.log(`Buscando comentarios del post con ID: ${postId}...`);
    const comentarios = [
      { id: 1, texto: '¡Excelente post!' },
      { id: 2, texto: 'Muy informativo, gracias.' }
    ];
    callback(null, comentarios);
  }, demora);
};

/* --- PARTE 1: CALLBACK HELL --- */
obtenerUsuario(1, (err, usuario) => {
  if (err) {
    console.error(err);
  } else {
    obtenerPosts(usuario.id, (errPosts, posts) => {
      if (errPosts) {
        console.error(errPosts);
      } else {
        obtenerComentarios(posts[0].id, (errComentarios, comentarios) => {
          if (errComentarios) {
            console.error(errComentarios);
          } else {
            console.log('Comentarios obtenidos (Callbacks):', comentarios);
          }
        });
      }
    });
  }
});

/* --- PARTE 2: REFACTORIZACIÓN A PROMESAS --- */
const obtenerUsuarioPromesa = (id) => {
  return new Promise((resolve, reject) => {
    obtenerUsuario(id, (err, usuario) => {
      if (err) reject(err);
      else resolve(usuario);
    });
  });
};

const obtenerPostsPromesa = (userId) => {
  return new Promise((resolve, reject) => {
    obtenerPosts(userId, (err, posts) => {
      if (err) reject(err);
      else resolve(posts);
    });
  });
};

const obtenerComentariosPromesa = (postId) => {
  return new Promise((resolve, reject) => {
    obtenerComentarios(postId, (err, comentarios) => {
      if (err) reject(err);
      else resolve(comentarios);
    });
  });
};

obtenerUsuarioPromesa(1)
  .then(usuario => obtenerPostsPromesa(usuario.id))
  .then(posts => obtenerComentariosPromesa(posts[0].id))
  .then(comentarios => console.log('Comentarios obtenidos (Promesas):', comentarios))
  .catch(error => console.error(error));

/* --- PARTE 3: ASYNC / AWAIT --- */
async function mostrarPerfilDeUsuario() {
  try {
    const usuario = await obtenerUsuarioPromesa(1);
    const posts = await obtenerPostsPromesa(usuario.id);
    const comentarios = await obtenerComentariosPromesa(posts[0].id);
    console.log('Comentarios obtenidos (Async/Await):', comentarios);
  } catch (error) {
    console.error(error);
  }
}

mostrarPerfilDeUsuario();