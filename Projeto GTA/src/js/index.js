const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
botao.addEventListener("click", () => {
    elementoPlataformas.classList.contains("ativo");

elementoPlataformas.classList.toggle("ativo");
});