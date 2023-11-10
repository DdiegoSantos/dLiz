function formulario(){
   
    
    
    form = document.getElementById("zap-verde");
    logZap = document.querySelector('.zap-verde');
    logZap.style.display = 'none';
    logZap.style.transition = '2s';
    form.style.display = 'block';
    form.style.transition = '2s';

}
function closedForm(){
    form = document.getElementById("zap-verde");
    logZap = document.querySelector('.zap-verde');
    logZap.style.display = 'block';
    form.style.display = 'none';
}
function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var url = "https://wa.me/5527998344582?text=" // Seu numero
      + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Telefone*: " + telefone + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }