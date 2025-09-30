const prompt = require('prompt-sync')();

const alcool = Number(prompt('Digite o preço do litro do álcool: R$'));
const gasolina = Number(prompt('Digite o preço do litro da gasolina: R$'));

if (alcool <= 0.7 * gasolina) {
    console.log('Abasteça com Álcool');
} else {
    console.log('Abasteça com Gasolina');
}

