document.getElementById('registre-se').addEventListener('click', function() {

    const usuario = document.getElementById('registrarUsuario').value;
    const email = document.getElementById('registrarEmail').value;
    const senha = document.getElementById('registrarSenha').value;

    localStorage.setItem('usuario', usuario);
    localStorage.setItem('senha', senha);
    localStorage.setItem('email', email);

    window.location.href = './login.html'

})