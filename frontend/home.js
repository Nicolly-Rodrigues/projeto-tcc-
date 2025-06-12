document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8000/api/produtos/")
      .then(res => res.json())
      .then(produtos => {
        const esquerda = document.getElementById("produto-esquerda");
        const direita = document.getElementById("produto-direita");

        // Suporte para múltiplos produtos: 1 à esquerda, 1 à direita
        if (produtos.length > 0) {
          const p1 = produtos[4];
          esquerda.innerHTML = `
            <img src="${p1.imagem}" alt="${p1.nome}" />
            <h4>${p1.nome}</h4>
            <p>R$ ${p1.preco}</p>
            <a href="/frontend/pagproduto.html?id=${p1.id}"><button>ADICIONAR</button></a>
          `;
        }
        if (produtos.length > 1) {
          const p2 = produtos[1];
          direita.innerHTML = `
            <img src="${p2.imagem}" alt="${p2.nome}" />
            <h4>${p2.nome}</h4>
            <p>R$ ${p2.preco}</p>
            <a href="/frontend/pagproduto.html?id=${p2.id}"><button>ADICIONAR</button></a>
          `;
        }
      });
  });
  
  