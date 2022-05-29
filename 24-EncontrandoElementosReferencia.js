//Encontrando elementos (Tipo de referência)
const marcas = [
  { id: 1, nome: "a" },
  { id: 2, nome: "b" },
];
// console.log(marca.includes({ id: 1, nome: "a" }));
const marca = marcas.find(function (marca) {
  return marca.nome === "a";
});
console.log(marca);
