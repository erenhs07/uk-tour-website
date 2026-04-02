document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('registerForm');
  var result = document.getElementById('result');

  if (!form) {
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('tourError').textContent = '';
    document.getElementById('agreeError').textContent = '';
    result.textContent = '';
    result.className = '';

    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var tour = document.getElementById('tourChoice').value;
    var agree = document.getElementById('agree').checked;
    var ok = true;

    if (fullName.length < 2) {
      document.getElementById('nameError').textContent = 'Please enter your name.';
      ok = false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
      ok = false;
    }

    if (tour === '') {
      document.getElementById('tourError').textContent = 'Please choose a tour.';
      ok = false;
    }

    if (!agree) {
      document.getElementById('agreeError').textContent = 'You must agree before submitting.';
      ok = false;
    }

    if (ok) {
      result.textContent = 'Form checked successfully. Registration is ready to send.';
      result.className = 'success';
      form.reset();
    }
  });
});
