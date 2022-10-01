const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '.', 'teste.json');
const escrever = require('./modules/escrever.js');
const read = require('./modules/ler');

// const pessoas = [ 
//     {
//         nome: 'João'
//     },
//     {
//         nome: 'João'
//     },
//     {
//         nome: 'João'
//     },
//     {
//         nome: 'João'
//     }
// ];

// const pessoasJSON = JSON.stringify(pessoas, '', 2);

let dados;

async function ler(caminho) {
    const result = await read(caminho);
    rederizarDados(result);
}


function rederizarDados(result){
    dados = JSON.parse(result);
    dados.forEach(val => console.log(val))
}

ler(caminhoArquivo)
// const resultRead = ler(caminhoArquivo)
//     .then(dados => console.log(JSON.parse(dados)))
//     .catch(e => console.log(e));


// escrever(caminhoArquivo, pessoasJSON);