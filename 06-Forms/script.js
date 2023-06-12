document.addEventListener('DOMContentLoaded', function () {
  const firstnameInput = document.getElementById('firstname');
  const displayFirstname = document.getElementById('display-firstname');

  firstnameInput.addEventListener('keyup', function () {
    displayFirstname.textContent = firstnameInput.value;
  });

  const ageInput = document.getElementById('age');
  const hardTruthSection = document.getElementById('a-hard-truth');

  ageInput.addEventListener('keyup', function () {
    if (Number(ageInput.value) < 18) {
      hardTruthSection.style.visibility = 'hidden';
    } else {
      hardTruthSection.style.visibility = 'visible';
    }
  });

  const passwordInput = document.getElementById('pwd');
  const confirmPasswordInput = document.getElementById('pwd-confirm');

  function showPasswordError() {
    passwordInput.style.borderColor = 'red';
    confirmPasswordInput.style.borderColor = 'red';
  }

  function clearPasswordError() {
    passwordInput.style.borderColor = '';
    confirmPasswordInput.style.borderColor = '';
  }

  passwordInput.addEventListener('keyup', function () {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password.length < 6 || password !== confirmPassword) {
      showPasswordError();
    } else {
      clearPasswordError();
    }
  });

  confirmPasswordInput.addEventListener('keyup', function () {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password.length < 6 || password !== confirmPassword) {
      showPasswordError();
    } else {
      clearPasswordError();
    }
  });

  const darkModeToggle = document.getElementById('toggle-darkmode');

  darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.value === 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  });
});