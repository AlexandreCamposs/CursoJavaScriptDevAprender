//Encontrando elementos do tipo primitivo
const numeros = [1, 2, 3, 4];
console.log(numeros.indexOf(2)); // indexOf() passa o elemento e ele retorna o índice do número


const numeros2 = [5, 8, 6, 7, 8, 9, 3 ];
console.log(numeros2.lastIndexOf(8)); // lastIndexOf() busca o última ocorrencia do valor passado.
console.log(numeros2.includes(2)); // includes retorna se existe o número como true ou false.