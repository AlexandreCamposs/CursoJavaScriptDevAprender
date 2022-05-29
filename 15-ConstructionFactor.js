//
//camelCase umDoisTresQuatro
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

//Pascal Case - UmDoisTresQuato
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
  (this.marcaCelular = marcaCelular),
    (this.tamanhoTela = tamanhoTela),
    (this.capacidadeBateria = capacidadeBateria),
    (this.ligar = function () {
      console.log("fazendo ligação");
    });
}
const celular = new Celular("asus", 5.5, 5000);
console.log(celular);
