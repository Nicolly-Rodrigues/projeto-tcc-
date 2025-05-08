document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const email = document.querySelector("#email").value;
      const senha = document.querySelector("#senha").value;
  
      try {
        const resposta = await fetch("http://127.0.0.1:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha }),
        });
  
        const resultado = await resposta.json();
  
        if (resposta.ok) {
          alert("✅ Login realizado com sucesso!");
          // Redirecionar ou armazenar token, se necessário
        } else {
          alert("❌ Erro: " + resultado.mensagem);
        }
      } catch (erro) {
        alert("Erro ao conectar à API. Verifique se ela está em execução.");
        console.error(erro);
      }
    });
  });