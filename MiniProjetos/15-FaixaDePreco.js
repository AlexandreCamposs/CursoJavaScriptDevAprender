//Faixa de preço
//criar um array de objetos de faixa de preço ára que ele possa ser usado em um site igual ao mercado livre.
//Primeira opcao
let faixas = [
  { tooltip: "até R$ 700", minimo: 0, maximo: 700 },
  { tooltip: "de R$ 700 a R$ 1000", minimo: 700, max: 1000 },
  { tooltip: "R$10000", minimo: 10000, maximo: 999999 },
];
//Terceira Opção ( Factory Function)
function criarFaixaPreco(tooltip, minimo, maximo) {
  return {
    tooltip,
    minimo,
    maximo,
  };
}
let faixas2 = [
  criarFaixaPreco("a", 1, 100),
  criarFaixaPreco("b", 100, 1000),
  criarFaixaPreco("c", 1000, 10000),
];

//Terceira Opção (Constructor Function)
function FaixaDePreco(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixa3 = [
    new FaixaDePreco('d', 10, 20),
    new FaixaDePreco('e', 20, 30),
    new FaixaDePreco('f', 40, 50)
];
console.log(faixas);
console.log(faixas2);
console.log(faixa3);

