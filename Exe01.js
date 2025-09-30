const prompt = require('prompt-sync')();

const codigo = Number(prompt('Digite o código da categoria do produto: '));

if (codigo === 1) {
    console.log('Alimento não-perecível');
} else if (codigo === 2 || codigo === 3) {
    console.log('Alimento perecível');
} else if (codigo === 4) {
    console.log('Higiene Pessoal');
} else {
    console.log('Código invalido');
}