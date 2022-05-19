//Operadores Aritiméticos(matemáticos)
//Operadores Atribuição
//Operadores de Comparação
//Operadores Lógicos
//OperadoresBitwise

//Operadores Aritiméticos(matemáticos)
/*     +, -, *, /, **          */
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

//incremento  ++   --
let idade = 18;
console.log(idade);
console.log(++idade);
let idadee = 18;
console.log(idadee);
console.log(--idadee);

//Operadores Atribuição
let valorTeclado = 100;
// valorTeclado = valorTeclado + valorTeclado;
// valorTeclado = valorTeclado - valorTeclado;
valorTeclado += valorTeclado;
// valorTeclado -= valorTeclado;
console.log(valorTeclado);

//Operadores de Igualdade
//Igualde estrita
console.log(1 === 1);
console.log("1" === 1);

//Igualdade solta
// console.log(1 == 1)
// console.log('1' ==1)

//Operador ternario
//Tem um cliente,100 premium,comum
let pontos = 100;
let tipo = pontos > 100 ? "premium" : "comum";
console.log(tipo);

//Operadores lógicos e (&&)
//  Retorna TRUE caso os dois operandos forem TRUE
// console.log(true && false);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let aplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(aplicar);

//Operador Lógico ou ( || )
let maiorDeIdadee = true;
let possuiCarteiraDeTrabalhop = true;
let podeAplicar = maiorDeIdadee || possuiCarteiraDeTrabalhoo;
console.log('Pode Aplicar', podeAplicar);

//Operador NOT ( ! )
let candidatoRecusado = !podeAplicar;
console.log('Canditato Recusado', candidatoRecusado)