const reviews = [
    {
        marca: "Nike",
        modelo: "Air Force",
        imagem: "https://authenticfeet.vtexassets.com/arquivos/ids/239700/Tenis-Nike-Air-Force-1-07-Le-Masculino-Branco.jpg?v=637438943741330000",
        nota: 9,
        descricao: "O Air Force é um clássico da Nike, famoso por seu design limpo e confortável. Lançado originalmente em 1982, ele é popular tanto para uso casual quanto esportivo.",
        material: "Couro, borracha",
        situacoes: "Uso casual e esportivo",
        valor: "R$ 499,00",
        anoLancamento: 1982
    },
    {
        marca: "New Balance",
        modelo: "550",
        imagem: "https://lojavirus.fbitsstatic.net/img/p/tenis-new-balance-550-white-black-bb550esi-75612/317505.jpg?w=1200&h=1200&v=no-value",
        nota: 8,
        descricao: "Com um visual inspirado nos anos 1980, o New Balance 550 é a escolha ideal para quem aprecia o streetwear com um toque retrô.",
        material: "Couro, camurça, borracha",
        situacoes: "Streetwear, casual",
        valor: "R$ 649,00",
        anoLancamento: 1985
    },
    {
        marca: "Adidas",
        modelo: "Yeezy 500",
        imagem: "https://droper-media.us-southeast-1.linodeobjects.com/1422022134336404.webp",
        nota: 9,
        descricao: "O Yeezy 500 é um modelo robusto e de alta performance, com um design inspirado nos tênis de corrida dos anos 90. Seu amortecimento e a combinação de materiais tornam-no tanto um item de moda quanto uma opção confortável.",
        material: "Camurça, malha, borracha",
        situacoes: "Uso diário, estilo urbano",
        valor: "R$ 1.799,00",
        anoLancamento: 2018
    },
    {
        marca: "Nike",
        modelo: "Air Jordan 1",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMtpMZEe4S_TtrhXMLWjBm2eUH3v-1yt_Ng&s",
        nota: 10,
        descricao: "O Air Jordan 1 foi o tênis que deu início à linha icônica de Michael Jordan. Lançado em 1985, combina estilo retrô com performance moderna.",
        material: "Couro, borracha",
        situacoes: "Basquete, uso urbano, casual",
        valor: "R$ 799,00",
        anoLancamento: 1985
    },
    {
        marca: "Nike",
        modelo: "Air Jordan 4",
        imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-MYRxPiJZRq3U0uDQSYUnaxTedjFiRnFvvrO7YJhsxgse6jqDMptVt93s2dRJWI5XLbOMAqHMCfnKTi3tN4gbm-ovaCq6zV6W20Eb6mUN9w5JozaHZcgTCUw&usqp=CAE",
        nota: 9,
        descricao: "Lançado em 1989, o Air Jordan 4 é famoso por seu sistema de amortecimento e design robusto, ideal para amantes de basquete e moda urbana.",
        material: "Couro, malha, borracha",
        situacoes: "Basquete, uso diário, estilo urbano",
        valor: "R$ 899,00",
        anoLancamento: 1989
    },
    {
        marca: "Nike",
        modelo: "Air Max 90",
        imagem: "https://imgnike-a.akamaihd.net/1300x1300/0093187TA6.jpg",
        nota: 8,
        descricao: "Com sua tecnologia Air visível, o Air Max 90 é uma peça-chave no legado da Nike, combinando conforto e estilo retrô.",
        material: "Malha, borracha",
        situacoes: "Uso diário, estilo casual",
        valor: "R$ 599,00",
        anoLancamento: 1990
    },
    {
        marca: "Adidas",
        modelo: "Samba",
        imagem: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Tenis_Samba_Classic_Branco_772109_01_standard.jpg",
        nota: 9,
        descricao: "O Adidas Samba é um clássico do futebol e do streetwear. Lançado nos anos 1950, mantém sua relevância pelo design simples e funcionalidade.",
        material: "Couro, borracha",
        situacoes: "Futebol, streetwear",
        valor: "R$ 499,00",
        anoLancamento: 1950
    },
    {
        marca: "Nike",
        modelo: "Air Jordan 3",
        imagem: "https://droper-media.us-southeast-1.linodeobjects.com/1952023134928280.webp",
        nota: 8,
        descricao: "Conhecido por introduzir o icônico logo Jumpman, o Air Jordan 3 trouxe inovação ao unir conforto, estilo e um design revolucionário.",
        material: "Couro, camurça, borracha",
        situacoes: "Basquete, uso urbano",
        valor: "R$ 849,00",
        anoLancamento: 1988
    },
    {
        marca: "Adidas",
        modelo: "Grand Court",
        imagem: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/02cd9a97ce874d89ba17ae2b003ebe50_9366/Tenis_Grand_Court_Branco_GW6511_01_standard.jpg",
        nota: 8,
        descricao: "Inspirado nos tênis de tênis clássicos, o Grand Court da Adidas oferece um estilo clean, conforto e versatilidade para uso diário.",
        material: "Couro sintético, borracha",
        situacoes: "Uso diário, casual",
        valor: "R$ 399,00",
        anoLancamento: 2020
    },
    {
        marca: "Nike",
        modelo: "Air Jordan 11",
        imagem: "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/b575c9ff-e8e6-48da-b2e9-54f91b22aa00/product",
        nota: 10,
        descricao: "O Air Jordan 11 é conhecido pelo uso de materiais premium como couro envernizado, oferecendo elegância e performance para quadras e eventos casuais.",
        material: "Couro, borracha",
        situacoes: "Basquete, uso casual, elegante",
        valor: "R$ 1.099,00",
        anoLancamento: 1995
    },
    {
        marca: "New Balance",
        modelo: "9060",
        imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/mpaulqpb/tenis-new-balance-9060-rsacmarinho.jpg",
        nota: 9,
        descricao: "O New Balance 9060 combina design contemporâneo com a icônica tecnologia de amortecimento da marca, perfeito para quem busca conforto e estilo.",
        material: "Malha, camurça, borracha",
        situacoes: "Uso diário, estilo urbano",
        valor: "R$ 749,00",
        anoLancamento: 2021
    },
    {
        marca: "Adidas",
        modelo: "Yeezy 350",
        imagem: "https://acdn.mitiendanube.com/stores/001/863/816/products/img_7750-06c788767a351b5dce17059446855206-640-0.jpeg",
        nota: 10,
        descricao: "O Yeezy 350 é um ícone moderno, conhecido pelo seu design minimalista e conforto absoluto. Com a tecnologia Boost, oferece uma experiência de uso excepcional tanto para o dia a dia quanto para o estilo.",
        material: "Malha Primeknit, borracha",
        situacoes: "Uso diário, streetwear",
        valor: "R$ 1.399,00",
        anoLancamento: 2015
    }
];

// Função para carregar os reviews
function carregarReviews(filtro = "") {
    const reviewsSection = document.getElementById("reviews-section");
    reviewsSection.innerHTML = "";

    const reviewsFiltrados = reviews.filter(review =>
        review.modelo.toLowerCase().includes(filtro.toLowerCase())
    );

    reviewsFiltrados.forEach(review => {
        const card = document.createElement("div");
        card.className = "review-card";
        card.innerHTML = `
            <img src="${review.imagem}" alt="${review.modelo}">
            <h3>${review.modelo} - ${review.marca}</h3>
            <p><strong>Descrição:</strong> ${review.descricao}</p>
            <p><strong>Material:</strong> ${review.material}</p>
            <p><strong>Situações recomendadas:</strong> ${review.situacoes}</p>
            <p><strong>Ano de lançamento:</strong> ${review.anoLancamento}</p>
            <p><strong>Valor:</strong> ${review.valor}</p>
            <div class="nota">Nota: ${review.nota}/10</div>
        `;
        reviewsSection.appendChild(card);
    });

    // Função de pesquisa
document.getElementById("search-button").addEventListener("click", function() {
    const filtro = document.getElementById("search-input").value;
    carregarReviews(filtro);
});

}

// Inicializar a página carregando todos os reviews
carregarReviews();
