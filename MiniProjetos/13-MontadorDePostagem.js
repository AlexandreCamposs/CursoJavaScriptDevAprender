//Objeto de postagem
//Criar um objeto de postagem de blog que vai conter as seguintes propriedades
//postagem,titulo,mensagem,autor,vizualizacoes,comentarios(autor,mensagem),estaAoVivo

let postagem = {
    titulo:'a',
    mensagem:'b',
    autor:'c',
    visualizacoes:100,
    comentarios:[
        {autor:'a',mensagem:'b'},
        {autor:'a',mensagem:'b'}
    ],
    estaAoVivo: true
}
console.log(postagem);