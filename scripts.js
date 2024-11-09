// Array para armazenar reviews
const reviews = [
    {
        imagem: "imagem-do-tenis1.jpg",
        titulo: "Tênis Modelo A",
        descricao: "Ótimo para corridas longas, oferece suporte excelente."
    },
    {
        imagem: "imagem-do-tenis2.jpg",
        titulo: "Tênis Modelo B",
        descricao: "Perfeito para atividades diárias, muito confortável."
    }
];

// Função para carregar reviews existentes
function carregarReviews() {
    const reviewsSection = document.getElementById("reviews-section");
    reviewsSection.innerHTML = "";

    reviews.forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.className = "review-card pure-u-1 pure-u-md-1-3";
        reviewCard.innerHTML = `
            <img src="${review.imagem}" alt="${review.titulo}">
            <h3>${review.titulo}</h3>
            <p>${review.descricao}</p>
        `;
        reviewsSection.appendChild(reviewCard);
    });
}

// Função para adicionar um novo review (exemplo)
function addReview() {
    const novoReview = {
        imagem: "imagem-do-tenis3.jpg",
        titulo: "Tênis Modelo C",
        descricao: "Design inovador e suporte incomparável."
    };
    reviews.push(novoReview);
    carregarReviews();
}

// Carregar reviews ao abrir a página
window.onload = carregarReviews;
