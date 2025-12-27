const imagenPrincipal = document.querySelector('#imagen-principal');
const thumbnails = document.querySelectorAll('.thumbnail');
const contenedorPrincipal = document.querySelector('#imagen-principal-container');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const nuevaImagenSrc = this.src;
        const textoPieDeFoto = this.alt;

        imagenPrincipal.src = nuevaImagenSrc;

        const pieExistente = document.querySelector('#pie-de-foto');
        if (pieExistente) {
            pieExistente.remove();
        }

        const nuevoPie = document.createElement('p');
        nuevoPie.id = 'pie-de-foto';
        nuevoPie.textContent = textoPieDeFoto;

        contenedorPrincipal.appendChild(nuevoPie);
    });
});