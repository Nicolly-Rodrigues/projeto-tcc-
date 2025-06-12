function cadastrar() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login && senha) {

      window.location.href = "home.html";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }