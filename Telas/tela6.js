const continuar = document.getElementById('continuar');
const voltar = document.getElementById('voltar');
const inicio = document.getElementById('inicio');

if (continuar) {
    continuar.addEventListener('click', () => {
        document.startViewTransition(window.location.href = "./tela7.html");
    });
}

if (voltar) {
    voltar.addEventListener('click', () => {
        document.startViewTransition(window.location.href = "./tela5.html");
    });
}

if (inicio) {
    inicio.addEventListener('click', () => {
        document.startViewTransition(window.location.href = "../index.html");
    });
}
