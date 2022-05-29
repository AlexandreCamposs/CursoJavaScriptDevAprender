//Natureza dinâmica de objetos
const mouse = {
  cor: "red",
  marca: "dazz",
};
mouse.velocidade = 5000;
mouse.trocaDPI = function () {
  console.log("mudando DPT");
};
// delete mouse.velocidade;
// delete mouse.trocaDPI;
console.log(mouse);

