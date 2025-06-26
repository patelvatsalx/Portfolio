(function() {
    emailjs.init("ODUKbRdnv4XvhVW60"); // Replace with your EmailJS public key

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const loading = document.querySelector('.loading');
        const errorMessage = document.querySelector('.error-message');
        const sentMessage = document.querySelector('.sent-message');
        
        loading.style.display = 'block';
        errorMessage.style.display = 'none';
        sentMessage.style.display = 'none';

        // Add console logs for debugging
        console.log('Sending email...');

        emailjs.sendForm('service_p2wa0aj', 'template_vv1a7u9', this) // Replace template_xxxxx with your actual template ID
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                loading.style.display = 'none';
                sentMessage.style.display = 'block';
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
                loading.style.display = 'none';
                errorMessage.style.display = 'block';
                errorMessage.innerHTML = 'Failed to send message: ' + error.text;
            });
    });
})();
