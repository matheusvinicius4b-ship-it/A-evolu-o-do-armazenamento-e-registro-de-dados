const guia = document.getElementById('guia');
const quiz = document.getElementById('quiz');

guia.addEventListener('click', () => {
    document.startViewTransition(window.location.href = "./tela.html");
});

quiz.addEventListener('click', () => {
    document.startViewTransition(window.location.href = "./Quiz/t.html");
});