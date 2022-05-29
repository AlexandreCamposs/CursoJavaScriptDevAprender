//Javascript - Objeto Endereço
//Criar um objeto de endereço que contem
//rua,cidade, cep, exibirEndereco(endereco)

let endereco = {
  rua: "alvaro",
  cidade: "santos",
  cep: 11014569,
};

function exibirEndereco(endereco){
    for (let chave in endereco)
    console.log(chave,endereco[chave]);
}
exibirEndereco(endereco);