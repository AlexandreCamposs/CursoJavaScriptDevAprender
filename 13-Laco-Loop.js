// console.log('Estou aprendendo JS!')
// console.log('Estou aprendendo JS!')
// console.log('Estou aprendendo JS!')
// console.log('Estou aprendendo JS!')
// console.log('Estou aprendendo JS!')
//Laços
//1.For
//2.While
//3.Do While
//4.For In
//5.For Of

//1.For
for (let i = 0; i < 5; i++) {
  console.log("Contagem de i:", i);
}
for (let x = 1; x <= 5; x++) {
  if (x % 2 !== 0) {
    console.log("Testando valor de x:", x);
  }
}
//2.While loop
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) {
    console.log("Testando valor de i:", i);
  }
  i++;
}
//3.Do while
let y = 0;
do {
  console.log("Testando valor de y:", y);
  y++;
} while (y <= 10);
//4.For In
const pessoa = {
  nome: "Alexandre",
  idade: 29,
};
for (let chave in pessoa) {
  console.log(chave, pessoa["nome"]);
}
const cores = ["vermelho", "azul", "verde"];
for (let indice in cores) {
  console.log(indice, cores[indice]);
}
//5.For Of
const cores2 = ["lilas", "preto", "cinza"];
for(let cor of cores2){
    console.log(cor);
}