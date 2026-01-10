document.querySelectorAll('.filtro-titulo').forEach(titulo => {
  titulo.addEventListener('click', () => {
    const opcoes = titulo.nextElementSibling;
    const seta = titulo.querySelector('.seta')

    opcoes.classList.toggle('ativo')
    seta.classList.toggle('ativo')
  });
});