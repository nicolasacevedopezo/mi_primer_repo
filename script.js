$(document).ready(function() {
const $form = $('#contact-form');
    const $feedbackContainer = $('#feedback-message');
    const $inputNombre = $('#nombre');
    const $inputEmail = $('#email');
    $form.on('submit', function(event) {
        event.preventDefault(); 
        const nombre = $inputNombre.val().trim();
        const email = $inputEmail.val().trim();
        $feedbackContainer.html(''); 

        if (nombre === '' || email === '') {
            const errorMessage = `
                <div class="alert alert-danger" role="alert">
                    ERROR, por favor llenar los campos Nombre y Correo Electrónico.
                </div>
            `;
            $feedbackContainer.html(errorMessage);
        } else {
            const successMessage = `
                <div class="alert alert-success" role="alert">
                    Gracias, ${nombre}, te contactaré pronto.
                </div>
            `;
            $feedbackContainer.html(successMessage);
            
            $form[0].reset(); 
        }
    });
    $('a[href^="#"]').on('click', function(event) {
        if ($(this).attr('href').length > 1 && $(this).attr('data-bs-toggle') !== 'collapse') {
            event.preventDefault();
            const target = $(this).attr('href');
            $('.navbar-collapse').collapse('hide'); 
            $('html, body').animate({
                scrollTop: $(target).offset().top - 60 
            }, 800); 
        }
    });
});