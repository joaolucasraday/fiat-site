//caixas do filtro

document.querySelectorAll('.filtro-titulo').forEach(titulo => {
  titulo.addEventListener('click', () => {
    const opcoes = titulo.nextElementSibling;
    const seta = titulo.querySelector('.seta')

    opcoes.classList.toggle('ativo')
    seta.classList.toggle('ativo')
  });
});

//marcador das opcoes

document.querySelectorAll('.opcao').forEach(opcao => {
    opcao.addEventListener('click', () => {
        opcao.classList.toggle('ativa');
    });
});