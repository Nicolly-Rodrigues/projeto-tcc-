const produtos = [
    {
      nome: "COOLANE SLIM PRETA, MANGA E GOLA RETA.",
      preco: 50.00,
      imagem: "https://via.placeholder.com/200x250?text=Produto+1"
    },
    {
      nome: "BODYSUIT CINZA, UM OMBRO.",
      preco: 66.90,
      imagem: "https://via.placeholder.com/200x250?text=Produto+2"
    },
    {
      nome: "FIRLA TOP RECORTADO PLISSADO BRANCO.",
      preco: 55.90,
      imagem: "https://via.placeholder.com/200x250?text=Produto+3"
    },
    {
      nome: "CROPPED ALÇA GROSSA PRETO",
      preco: 49.90,
      imagem: "https://via.placeholder.com/200x250?text=Produto+4"
    }
  ];

  const lista = document.getElementById('product-list');
  let carrinho = 0;
  const cartCount = document.querySelector('.cart-count');

  produtos.forEach(produto => {
    const card = document.createElement('div');
    card.classList.add('product');
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="product-title">${produto.nome}</div>
      <div class="price">R$ ${produto.preco.toFixed(2)}</div>
      <button class="add-btn">ADICIONAR</button>
    `;
    card.querySelector('button').addEventListener('click', () => {
      carrinho++;
      cartCount.textContent = carrinho;
      alert(`"${produto.nome}" adicionado ao carrinho!`);
    });
    lista.appendChild(card);
  });