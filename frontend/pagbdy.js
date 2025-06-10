document.addEventListener('DOMContentLoaded', () => {
    const categorias = document.title.split(' | ')[0].toLowerCase();
    fetch(`http://127.0.0.1:8000/api/produtos/2/s`)
  
    .then(response => {
      if (!response.ok) throw new Error('Erro ao buscar produto');
      return response.json();
    })
    .then(data => {
      const container = document.getElementById('content');
      container.innerHTML = '';
      data.forEach(produto => {
        if(produto.categoria.nome === "blusas") {
          const produtosDiv = document.createElement('div');
          produtosDiv.className = 'produtolist';
          const imageUrl = `${produto.image}`;
          
          produtosDiv.innerHTML = `
          <div class="imgprodutos">
          <img src = "${produto.imagem}" alt = "${produto.nome}"/>
          <img src = "${produto.imagem}" alt = "${produto.nome}"/>
        </div>
        <div class="infoproduto">
        <p><strong>${produto.nome}</strong></p>
          <div class="<p>R$ ${produto.preco}</p></div>
          <div class="parcelamento">ou 6x de R$ 16,65.</div>
          <div class="quantidade">
            <button onclick="changeQty(-1)">-</button>
            <span id="qtde">1</span>
            <button onclick="changeQty(1)">+</button>
          </div>
          <button class="addcarrinho">Adicionar ao carrinho</button>
          `;
          container.appendChild(produtosDiv);
        }
      });
    })
    .catch(error => {
      console.error("Erro ao carregar produtos:", error);
    });
  });
  