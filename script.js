const slider = document.querySelector(".slider");

const imagens = [
"imagens/fiat-argo.jpg",
"imagens/fiat-toro.jpg",
"imagens/fiat-fastback.jpg"
];

let index = 0;

function atualizarImagem() {
slider.style.backgroundImage = `url('${imagens[index]}')`;
}

document.querySelector("#trocar-direita").addEventListener("click", (e) => {
e.preventDefault();
index = (index + 1) % imagens.length;
atualizarImagem();
});

document.querySelector("#trocar-esquerda").addEventListener("click", (e) => {
e.preventDefault();
index = (index - 1 + imagens.length) % imagens.length;
atualizarImagem();
});

atualizarImagem();
