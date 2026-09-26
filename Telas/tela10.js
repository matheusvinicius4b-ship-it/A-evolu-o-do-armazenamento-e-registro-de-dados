const voltar = document.getElementById('voltar');
const inicio = document.getElementById('inicio');

if (voltar) {
    voltar.addEventListener('click', () => {
        document.startViewTransition(window.location.href = "./tela9.html");
    });
}

if (inicio) {
    inicio.addEventListener('click', () => {
        document.startViewTransition(window.location.href = "../index.html");
    });
}
