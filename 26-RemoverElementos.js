//Revemovendo elementos

const numeros = [1, 2, 3, 4, 5, 6];
console.log(`Lista de arrays numeros ${numeros}`);
numeros.push();
numeros.unshift();
numeros.slice();

//início
const inicio = numeros.shift();
console.log(`removendo do inicio =(${inicio})`);
console.log(numeros);
//meio
const meio = numeros.splice(2, 1);
console.log(`removendo do meio =(${meio})`)
console.log(numeros);
//final
const final = numeros.pop()
console.log(`removendo do final = (${final})`)
console.log(numeros);
