//Combionando um Array e Cortando Arrays
const primeiro = [ 1, 2, 3];
console.log(`Primeiro Array [${primeiro}]`)
const segundo = [4, 5, 6];
console.log(`Segundo Array [${segundo}]`)

//Combinar
const combinado = primeiro.concat(segundo);
console.log(`Array Combinado  [${combinado}]`)

//Dividir

const cortado = combinado.slice(1,3)
console.log(`Array cortado = [${cortado}]`)

//Usando spread
const primeiro1 = [ 1, 2, 3];
const segundo2 = [4, 5, 6];

const combinado2 = [...primeiro1,'a',...segundo2,'b'];
console.log(`Array Combinado2 [${combinado2}]`)
console.log(combinado2 )


const clonado = [...combinado2];
console.log(`Array clonado ${clonado}`)