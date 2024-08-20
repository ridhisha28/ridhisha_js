function validateForm() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = 'green';
        }
    });
}

function showLoading() {
    document.getElementById('response').innerHTML = 'Processing...';
    // Add a loading spinner here if desired
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
    showLoading();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var course = document.getElementById('course').value;
    
    setTimeout(() => {
        document.getElementById('response').innerHTML = `Thank you, ${name}, for registering for the ${course} course. We will contact you at ${email} or ${phone} soon.`;
    }, 1500);
});