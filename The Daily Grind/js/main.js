document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Seleccionar el formulario
    const form = document.getElementById("reservationForm");

    // 2. Escuchar el evento submit
    form.addEventListener("submit", function(event) {
        
        // 3. Prevenir el envío por defecto (recarga de página)
        event.preventDefault();

        // 4. Capturar valores
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;

        // 5. Validación simple (Bootstrap ya maneja 'required', pero esto es extra)
        if (name.trim() === "" || email.trim() === "" || date === "") {
            alert("Por favor, completa todos los campos requeridos.");
            return;
        }

        // 6. Mostrar el Modal de éxito
        // Necesitamos instanciar el modal de Bootstrap via JS
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        // 7. Limpiar el formulario
        form.reset();
    });
});