function togglePassword() {
    var passwordInput = document.getElementById('password');
    var toggleIcon = document.getElementById('toggleIcon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.innerHTML = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleIcon.innerHTML = '👁️';
    }
}