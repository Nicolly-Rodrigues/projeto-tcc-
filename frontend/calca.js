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
    data.forEach(calca => {
      if(calca.categoria.nome === "calças") {
        const produtosDiv = document.createElement('div');
        produtosDiv.className = 'produtolist';
        const imageUrl = `${calca.image}`;
        
        produtosDiv.innerHTML = `
          <div class="produto">
            <img src = "${calca.imagem}" alt = "${calca.nome}"/>
            <p><strong>${calca.nome}</strong></p>
            <p> R$ ${calca.preco}</p>
            <button class="addcarrinho">ADICIONAR</button>
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