window.onload = function () {
  function validateUsername() {
    const username = document.getElementById('username');
    const error = document.getElementById('usernameError');
    if (username.value.length < 5) {
      username.classList.add('is-invalid');
      username.classList.remove('is-valid');
      error.classList.remove('d-none');
    } else {
      username.classList.remove('is-invalid');
      username.classList.add('is-valid');
      error.classList.add('d-none');
    }
  }

  function validateEmail() {
    const email = document.getElementById('email');
    const error = document.getElementById('emailError');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
      email.classList.add('is-invalid');
      email.classList.remove('is-valid');
      error.classList.remove('d-none');
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      error.classList.add('d-none');
    }
  }

function validatePassword() {
  const password = document.getElementById('password');
  const error = document.getElementById('passwordError');
  const value = password.value;

  // تحقق من الشروط
  const isValidLength = value.length >= 8;
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (isValidLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
    password.classList.remove('is-invalid');
    password.classList.add('is-valid');
    error.classList.add('d-none');
  } else {
    password.classList.add('is-invalid');
    password.classList.remove('is-valid');
    error.classList.remove('d-none');
    error.innerText = 'كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، وحرف كبير وصغير ورقم ورمز خاص.';
  }
}

  function validateBirthdate() {
    const birthdate = document.getElementById('birthdate');
    const error = document.getElementById('birthdateError');
    const birth = new Date(birthdate.value);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    const isOldEnough = (age > 18) || (age === 18 && m >= 0);
    if (!birthdate.value || !isOldEnough) {
      birthdate.classList.add('is-invalid');
      birthdate.classList.remove('is-valid');
      error.classList.remove('d-none');
    } else {
      birthdate.classList.remove('is-invalid');
      birthdate.classList.add('is-valid');
      error.classList.add('d-none');
    }
  }

  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validateUsername();
    validateEmail();
    validatePassword();
    validateBirthdate();

    const allValid = document.querySelectorAll('.is-valid').length === 4;
    if (allValid) {
      window.location.href = "store.html";
    } else {
      alert("من فضلك تأكد من صحة البيانات.");
    }
  });

  // ربط الدوال بــ onblur هنا (احتياطي برضو)
  document.getElementById('username').onblur = validateUsername;
  document.getElementById('email').onblur = validateEmail;
  document.getElementById('password').onblur = validatePassword;
  document.getElementById('birthdate').onblur = validateBirthdate;
};
