/*
Falsy
undefined
null
0
' '
NaN - not a number


Truthy
*/

false || "alexandre";
("alexandre");

false || 1;
1;

false || 1 || 3;
1;

let corPersonalizada = "Vermelho";
let corPadrao = "Azul";
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
