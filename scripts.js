document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document is ready!');

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_3vinssb', 'template_p1cdmmq', this)
            .then(function() {
                alert('Message envoyé avec succès !');
            }, function(error) {
                alert('Échec de l\'envoi du message: ' + JSON.stringify(error));
            });
    });
});
