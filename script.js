// Animação de entrada suave dos cartões ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-futuro");
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visivel");
        }, 300 * (index + 1));
    });

    // Inicia brilhos contínuos suaves no fundo
    setInterval(criarParticulaBarbie, 800);
});

// Função que cria ícones brilhantes flutuando na tela
function criarParticulaBarbie() {
    const container = document.getElementById("barbie-animation-container");
    const particula = document.createElement("div");
    particula.classList.add("estrela-flutuante");

    // Ícones temáticos da Barbie
    const icones = ["✨", "💖", "👑", "💎", "🌸", "👠"];
    particula.innerText = icones[Math.floor(Math.random() * icones.length)];

    // Posição horizontal aleatória
    particula.style.left = Math.random() * 100 + "vw";
    particula.style.bottom = "-30px";
    
    // Tamanho aleatório
    const tamanho = Math.random() * 1.2 + 0.8;
    particula.style.fontSize = tamanho + "rem";

    container.appendChild(particula);

    // Remove o elemento após a animação terminar para não pesar o site
    setTimeout(() => {
        particula.remove();
    }, 4000);
}

// Função ativada ao clicar nos botões de celebrar meta
function soltarBrilhos() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            criarParticulaBarbie();
        }, i * 80);
    }
}