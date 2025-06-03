document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    let cartItems = [];
  
    // Conteúdos simulados por seção
    const sections = {
      home: '<h2>Bem-vindo à Glamour Clothes</h2><p>Confira nossas novidades!</p>',
      blusas: '<h2>Blusas</h2><p>Produtos da categoria Blusas.</p>',
      calcas: '<h2>Calças</h2><p>Produtos da categoria Calças.</p>',
      jaquetas: '<h2>Jaquetas</h2><p>Produtos da categoria Jaquetas.</p>',
      buscar: '<h2>Buscar</h2><p>Digite sua busca acima.</p>',
    };
  
    // Navegação por seções
    document.querySelectorAll('.menu-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.dataset.section;
        if (section && sections[section]) {
          content.innerHTML = `<div class="section-content">${sections[section]}</div>`;
        }
      });
    });
  
    // Carrinho (ícone no topo)
    document.getElementById('cart-button').addEventListener('click', () => {
      renderCart();
    });
  
    // Busca por palavra-chave
    document.getElementById('search-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const term = e.target.value.trim();
        if (term) {
          content.innerHTML = `<div class="section-content"><h2>Resultados para "${term}"</h2><p>Exibindo resultados de busca...</p></div>`;
        }
      }
    });
  
    // Adicionar ao carrinho
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const title = product.querySelector('.product-title')?.textContent.trim();
        const price = product.querySelector('.product-price')?.textContent.trim();
  
        if (title && price) {
          cartItems.push({ title, price });
          renderCart();
        }
      });
    });
  
    // Renderização do carrinho
    function renderCart() {
      if (cartItems.length === 0) {
        content.innerHTML = '<div class="section-content"><h2>Seu carrinho está vazio.</h2></div>';
        return;
      }
  
      let cartHTML = '<div class="section-content"><h2>Seu Carrinho</h2><ul>';
      cartItems.forEach((item, index) => {
        cartHTML += `<li>${item.title} - ${item.price}</li>`;
      });
      cartHTML += '</ul></div>';
  
      content.innerHTML = cartHTML;
    }
  });