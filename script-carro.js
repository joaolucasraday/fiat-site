const hero = document.getElementById('imgs-carro');

if (hero) {
  const images = hero.dataset.images.split(',');

  let index = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 5000);
}

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