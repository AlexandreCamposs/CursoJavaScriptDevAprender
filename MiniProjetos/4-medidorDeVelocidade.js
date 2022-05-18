// Velocidade máxia de até 70km
//a cada 5km acima do limite ganha 1 ponto
//caso pontos maior que 12 -> "carteira suspendida"
//Math.Floor() arredonda o número

verificarVelocidade(130);

// function verificarVelocidade(velocidade) {
//     if ( velocidade <= 70)
//     console.log('Velocidade ok!')
//     else {
//         const pontos = Math.floor(((velocidade - 70) / 5));
//         if(pontos >= 12)
//         console.log('Carteira suspensa');
//         else 
//         console.log('Pontos', pontos);
//     }
// }
// Refatorado
function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if ( velocidade <= 70)
    console.log('Velocidade ok!')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if(pontos >= 12)
        console.log('Carteira suspensa');
        else 
        console.log('Pontos', pontos);
    }
}