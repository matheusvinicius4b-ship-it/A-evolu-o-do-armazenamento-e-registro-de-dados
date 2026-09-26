const continuar = document.getElementById('continuar');
const voltar = document.getElementById('voltar');
const inicio = document.getElementById('inicio');

if (continuar) {
    continuar.addEventListener('click', () => {
        document.startViewTransition(window.location.href = "./tela10.html");
    });
}

if (voltar) {
    voltar.addEventListener('click', () => {
        document.startViewTransition(window.location.href = "./tela8.html");
    });
}

if (inicio) {
    inicio.addEventListener('click', () => {
        document.startViewTransition(window.location.href = "../index.html");
    });
}
