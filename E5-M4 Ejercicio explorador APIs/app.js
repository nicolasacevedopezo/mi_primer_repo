const btnXhr = document.querySelector('#cargar-xhr');
const btnFetch = document.querySelector('#cargar-fetch');
const contenedorResultado = document.querySelector('#resultado');

function renderizarUsuarios(usuarios) {
    contenedorResultado.innerHTML = '';
    const lista = document.createElement('ul');

    usuarios.forEach(usuario => {
        const item = document.createElement('li');
        item.innerHTML = `
            <h4>${usuario.name}</h4>
            <p>Email: ${usuario.email}</p>
            <p>Ciudad: ${usuario.address.city}</p>
        `;
        lista.appendChild(item);
    });

    contenedorResultado.appendChild(lista);
}

// Parte 1: XMLHttpRequest
btnXhr.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const usuarios = JSON.parse(this.responseText);
            renderizarUsuarios(usuarios);
        }
    };

    xhr.onerror = function() {
        console.error('Error de red al intentar conectar con XHR');
    };

    xhr.send();
});

// Parte 2: Fetch API
btnFetch.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la red');
            }
            return response.json();
        })
        .then(data => {
            renderizarUsuarios(data);
        })
        .catch(error => {
            console.error('Hubo un problema con la operación fetch:', error);
        });
});