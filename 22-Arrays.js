//Introdução a Arrays
//Add novos Elesmentos
//Encontrar Elementos
//Remover Elementos
//Dividir Elementos
//Dividir Arrays
//Combinar Arrays
const numeros1 = [5, 6, 9, 8];
const numeros2 = [5, 6, 9, 8];
const numeros3 = [5, 6, 9, 8];
//Formas de incluir no Array
//Início
numeros1.unshift(0);
console.log(numeros1);
//Meio
numeros2.splice(1, 0, "a"); //splice é dividido em três partes a primeira em qual índice vai add a segunda se vai remover algum array e a terceira o que vai ser add
console.log(numeros2);
//Final
numeros3.push(9);
console.log(numeros3);
