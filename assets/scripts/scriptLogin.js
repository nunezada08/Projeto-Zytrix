document.getElementById('login').addEventListener('click', function () {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    const usuarioSalvo = localStorage.getItem('usuario');
    const senhaSalva = localStorage.getItem('senha');

    if (usuario === usuarioSalvo && senha === senhaSalva) {
        window.location.href = '../index.html'
    } else {
        alert('Usuario ou senha estão incorretos!')
    }
})