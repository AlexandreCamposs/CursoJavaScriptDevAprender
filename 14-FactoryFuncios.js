const celular = {
  marcaCelular: "Asus",
  tamanhoTela: {
    vertical: 155,
    horizontal: 75,
  },
  capacidadeBateria: 5000,
  ligar: function () {
    console.log("Fazendo ligação...");
  },
};

//JavaScript Factory Functions (Função de Fabrica)

function criaCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar: function () {
      console.log("Fazendo ligação...");
    },
  };
}
const celular1 = criaCelular("zenfone", 5.5, 5000);
console.log(celular1)
