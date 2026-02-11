function aplicarHeader() {
    const headerContainer = document.getElementById("header");
    headerContainer.innerHTML = `
    <header>
        <div class="imagens-header">
            <a href="index.html" target="_self"><img src="imagens/fiat-logo-white.png" alt="logo-fiat-branco" class="logo"></a>
            <img src="imagens/fiat-logo-italia.png" alt="fiat-logo-italia" class="italia">
            </div>
        <h1 id="titulo"></h1>
        <div class="hamburguer" id="hamburguer">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="nav">
            <a href="index.html" target="_self">Home</a>
            <a href="estoque.html" target="_self">Estoque</a>
            <a href="seminovos.html">Seminovos</a>
            <a href="#">Fale conosco</a>
            <a href="#">Sobre nós</a>
        </nav>
        <div class="telefone-div">
            <img src="imagens/icone-telefone.png" alt="telefone-icone" class="telefone">
            <p>(12)1 1234-5678</p>
        </div>
    </header>`;

    const nomePagina = document.body.getAttribute("data-pagina");
    document.getElementById("titulo").innerText = nomePagina;
}

document.addEventListener('DOMContentLoaded', aplicarHeader);

// HAMBURGUER
document.addEventListener("DOMContentLoaded", function () {
    const hamburguer = document.querySelector(".hamburguer");
    const nav = document.querySelector("nav");

    hamburguer.addEventListener("click", function () {
        hamburguer.classList.toggle("ativo");
        nav.classList.toggle("ativo");
    });
});
