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

/////////////////////


const img = document.getElementById('car-color-img');
const buttons = document.querySelectorAll('.color-buttons button');

if (img && buttons.length) {

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const color = button.dataset.color;
      const image = img.dataset[color];

      if (image) {
        img.src = image;
        img.alt = `Carro na cor ${color}`;
      }
    });
  });

}