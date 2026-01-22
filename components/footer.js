function aplicarFooter() {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) {
        console.error("Não encontrei o elemento com ID 'footer'");
        return;
    }
    footerContainer.innerHTML = `    
    <footer>
        <img src="imagens/fiat-logo-italia.png" alt="logo da italia da fiat">
        <p>Site criado por <strong>João Lucas Raday</strong></p>
    </footer>`;
}

document.addEventListener('DOMContentLoaded', aplicarFooter);