function VerificarEntrada() {
  NomeConvidado = document.getElementById("nome").value;
  ConvidadosCristian = ["Amanda", "Alexandre", "Pedro", "Carlos"];
  if (ConvidadosCristian.includes(NomeConvidado)) {
    document.getElementById("PermissaoDeEntrada").innerHTML =
      "Você pode entrar!";
  } else {
    document.getElementById("PermissaoDeEntrada").innerHTML =
      "Você não pode entrar.";
  }
}
