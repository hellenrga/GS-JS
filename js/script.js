document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.forms.login;
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var usuario = loginForm.usuario.value;
      var senha = loginForm.senha.value;
  
      if (usuario !== "" && senha !== "") {
        // Simulando o login

        alert("Bem-vindo! Login bem-sucedido.");
        // Redirecione o usuário para a página inicial

        window.location.href = "index.html";
      } else {
        // Exiba uma mensagem de erro se os campos estiverem vazios
        alert("Por favor, preencha todos os campos.");
      }
    });
  
    // Obtenha o formulário de notificação por e-mail
    var notifEmailForm = document.forms.notifEmail;
  
    notifEmailForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var email = notifEmailForm.email.value;
  
      if (email !== "") {

        alert("Você se inscreveu para receber notificações por e-mail.");

        notifEmailForm.email.value = "";
      } else {

        alert("Por favor, insira seu e-mail.");
      }
    });
  });
