document.addEventListener('DOMContentLoaded', () => {
  const categorias = document.title.split(' | ')[0].toLowerCase();
  fetch(`http://127.0.0.1:8000/api/produtos/`)

  .then(response => {
    if (!response.ok) throw new Error('Erro ao buscar produto');
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('content');
    container.innerHTML = '';
    data.forEach(cropped => {
      if(cropped.categoria.nome === "blusas") {
        const produtosDiv = document.createElement('div');
        produtosDiv.className = 'produtolist';
        const imageUrl = `${cropped.image}`;
        
        produtosDiv.innerHTML = `
          <div class="produto">
            <img src = "${cropped.imagem}" alt = "${cropped.nome}"/>
            <p><strong>${cropped.nome}</strong></p>
            <p>R$ ${cropped.preco}</p>
            <button onclick="window.location.href='./pagproduto.html?id=${cropped.id}'" class="addcarrinho">ADICIONAR</button>
          </div>
        `;
        container.appendChild(produtosDiv);
      }
    });
  })
  .catch(error => {
    console.error("Erro ao carregar produtos:", error);
  });
});