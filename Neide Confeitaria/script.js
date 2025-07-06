// Para cada produto com a classe 'produto', exibe todas as imagens em um carrossel
document.querySelectorAll('.produto').forEach(produto => {
    const slides = produto.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let slideIndex = 0;

    // Exibe as imagens do carrossel
    function showSlides() {
        for (let i = 0; i < totalSlides; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex].style.display = 'block';
    }

    // Verifica se o produto tem mais de uma imagem para exibir em um carrossel
    if (totalSlides > 1) {
        // Exibe a primeira imagem
        showSlides();

        // Avança para o próximo slide quando clicado na seta 'next'
        produto.querySelector('.next').addEventListener('click', function () {
            slideIndex = (slideIndex + 1) % totalSlides;
            showSlides();
        });

        // Retrocede para o slide anterior quando clicado na seta 'prev'
        produto.querySelector('.prev').addEventListener('click', function () {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            showSlides();
        });
    } else {
        // Se o produto tiver apenas uma imagem, exibe ela diretamente
        slides.forEach(slide => {
            slide.style.display = 'block';
        });
    }
});

// -------------------------------------------------- DOCINHOS ------------------------------------------------------------
// Obtenha todos os botões e modais
const btnDocinhos = document.querySelectorAll(".btn-docinhos");
const modais = document.querySelectorAll(".modal");
const spansClose = document.querySelectorAll(".close");

// Adicione um evento de clique para cada botão
btnDocinhos.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        modais[index].style.display = "block"; // Abra o modal correspondente ao botão clicado
    });
});

// Adicione um evento de clique para cada 'x' de fechamento
spansClose.forEach((span, index) => {
    span.addEventListener("click", () => {
        modais[index].style.display = "none"; // Feche o modal correspondente
    });
});

// Feche o modal ao clicar fora dele
window.addEventListener("click", (event) => {
    modais.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});