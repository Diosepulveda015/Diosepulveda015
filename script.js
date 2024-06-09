document.getElementById('register').addEventListener('submit', registerUser);
document.getElementById('login').addEventListener('submit', loginUser);

function registerUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const role = document.getElementById('register-role').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);
    
    if (userExists) {
        alert('El nombre de usuario ya está en uso.');
        return;
    }
    
    users.push({ username, password, role });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    toggleForms();
}

function loginUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    
    if (!user) {
        alert('Usuario o contraseña incorrectos.');
        return;
    }
    
    alert(`Bienvenido, ${user.username}. Rol: ${user.role}`);
    // Aquí puedes redirigir al usuario a una página diferente según su rol.
}

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}