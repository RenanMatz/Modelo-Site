// Catálogo de produtos

const catalogo = [
    {
        descricao: 1,
        img: "./css/img/hamburguer.jpg",
        alt: "Um hamburguer"
    },
    {
        descricao: 2,
        img: "./css/img/tenis.jpeg",
        alt: "Um tênis da nike branco com detalhes cinza"
    },
    {
        descricao: 3,
        img: "./css/img/ip-x.png",
        alt: "Um iphone X"
    },
];

for(let products of catalogo){
    const productCard = `
    <div id="productCard">
      <h3>Descrição do produto ${products.descricao}</h3>
      <img src="${products.img}" alt="${products.alt}">
      <button id="btnBuy">Compre agora</button>
    </div>
    `
    document.getElementById("principal").innerHTML += productCard
}