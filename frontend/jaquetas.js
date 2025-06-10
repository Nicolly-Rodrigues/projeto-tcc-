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
      data.forEach(jaqueta => {
        if(jaqueta.categoria.nome === "jaquetas") {
          const produtosDiv = document.createElement('div');
          produtosDiv.className = 'produtolist';
          const imageUrl = `${jaqueta.image}`;
          
          produtosDiv.innerHTML = `
            <div class="produto">
              <img src = "${jaqueta.imagem}" alt = "${jaqueta.nome}"/>
              <p><strong>${jaqueta.nome}</strong></p>
              <p>R$ ${jaqueta.preco}</p>
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