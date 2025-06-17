function irParaHome() {
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  if (login && senha) {
    // Simula cadastro e redireciona
    window.location.href = "home.html";
  } else {
    alert("Preencha todos os campos!");
  }
}