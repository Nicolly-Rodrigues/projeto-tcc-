document.addEventListener('DOMContentLoaded', () => {
  const categorias = document.title.split(' | ')[0].toLowerCase();
  fetch(`http://127.0.0.1:8000/api/produtos/`)

  .then(response => {
    if (!response.ok) throw new Error('Erro ao buscar produto');
    return response.json();
  })
  .then(data => {
    const product_list = document.getElementById('produtos');
    product_list.innerHTML = '';
    data.forEach(livro => {
      if(categorias === "calcas") {
        const produtosDiv = document.createElement('div');
        produtosDiv.className = 'produtos';
        const imageUrl = `${produtos.image}`;
        product_listDiv.innerHTML = `
        <div class="product">
        <img src="calcacinzaaaaa.jpeg.jpeg" alt="Wide Leg Jeans Cintura Alta Cinza">
        <p><strong>Wide Leg Jeans Cintura Alta Cinza</strong></p>
        <p>R$ 210,00</p>
        <button class="add-to-cart">ADICIONAR</button>
      </div>
      <div class="product">
        <img src="wide led ragada.jpeg.png" alt="Wide Leg Jeans Cintura Alta Rasgada">
        <p><strong>Wide Leg Jeans Cintura Alta Rasgada.</strongWide> </strong></p>
        <p>R$ 199,99</p>
        <button class="add-to-cart">ADICIONAR</button>
      </div>
      <div class="product">
        <img src="calca baggy.jpeg.png" alt="Cargo Baggy Jeans Verde">
        <p><strong>Cargo Baggy Jeans Verde</strong></p>
        <p>R$250,90</p>
        <button class="add-to-cart">ADICIONAR</button>
      </div>
      <div class="product">
        <img src="Calcabege.jpeg.png" alt="Cargo Wide Leg Bege">
        <p><strong>Cargo Wide Leg Bege</strong></p>
        <p>R$ 180,90</p>
        <button class="add-to-cart">ADICIONAR</button>
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