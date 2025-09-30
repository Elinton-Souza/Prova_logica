const prompt = require('prompt-sync')();

const altura = Number(prompt('Digite a sua altura (ex.: 177): '));
const peso = Number(prompt('Digite o seu peso: '));
const passe = prompt('Qual o seu tipo de passe (VIP ou COMUM)? ').toLowerCase();

if ((passe === 'vip' && altura > 155) || (passe === 'comum' && altura > 160 && peso < 100)) {
    console.log('Acesso Liberado!');
} else {
    console.log('Acesso Negado!');
}