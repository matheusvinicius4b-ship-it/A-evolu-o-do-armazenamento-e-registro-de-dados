const continuar = document.getElementById('continuar');
const verMais = document.getElementById('verMais');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

continuar.addEventListener('click', () => {
    document.startViewTransition(window.location.href = "./Telas/tela1.html");
});

verMais.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
