const images = [
'imagens/fotos-especiais/mobi-interior.jpg',
'imagens/fotos-especiais/mobi-farois.jpg',
'imagens/fotos-especiais/mobi-traseira.jpg'
];

let index = 0;
const hero = document.getElementById('imgs-carro');

function changeBackground() {
hero.style.backgroundImage = `url(${images[index]})`;
index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 5000);