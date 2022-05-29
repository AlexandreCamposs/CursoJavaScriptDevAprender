//Esvaziando um array
let numeros = [1, 2, 3, 4, 5, 6];
let outros = numeros;
//Solução 1
// numeros = []; //reinstanciar porém caso tenha outras referencias elas não seram apagadas
// console.log(`Solução 1 ${outros}`);

//Solução 2
// numeros.length = 0;
// console.log(`Solução 2 numeros ${numeros}`);
// console.log(`Solução 2 outros ${outros}`);

// // //Solução 3 
// numeros.splice(0,numeros.length);
// console.log(`Solução 3 numeros ${numeros}`);
// console.log(`Solução 3 outros ${outros}`);

// // //Solução 4
while (numeros.length > 0 )
    numeros.pop()
    console.log(`Solucão 4 numeros ${numeros}`)
    console.log(`Solucão 4 numeros ${outros}`)
    console.log(numeros)
